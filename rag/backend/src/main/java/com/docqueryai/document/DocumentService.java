package com.docqueryai.document;

import com.docqueryai.exception.ResourceNotFoundException;
import com.docqueryai.exception.UnauthorizedAccessException;
import com.docqueryai.user.User;
import com.docqueryai.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DocumentService {

    private final DocumentRepository documentRepository;
    private final UserRepository userRepository;

    @Transactional
    public DocumentResponse uploadDocument(MultipartFile file, String userId) {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("Uploaded file is empty");
        }

        String fileName = file.getOriginalFilename();
        if (fileName == null || fileName.isBlank()) {
            throw new IllegalArgumentException("File name is required");
        }

        String contentType = file.getContentType();
        if (contentType == null || !(contentType.contains("pdf") || contentType.contains("word") || contentType.contains("text") || fileName.toLowerCase().endsWith(".pdf") || fileName.toLowerCase().endsWith(".docx") || fileName.toLowerCase().endsWith(".txt"))) {
            throw new IllegalArgumentException("Unsupported file type");
        }

        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Document document = Document.builder()
            .user(user)
            .fileName(fileName)
            .fileType(extractFileType(fileName))
            .fileSize(file.getSize())
            .status(DocumentStatus.UPLOADED)
            .build();

        Document saved = documentRepository.save(document);

        try {
            Path uploadDir = Paths.get("./uploads");
            Files.createDirectories(uploadDir);
            Path target = uploadDir.resolve(saved.getId() + "_" + fileName);
            Files.copy(file.getInputStream(), target);
        } catch (IOException e) {
            throw new IllegalStateException("Failed to store uploaded file");
        }

        return toResponse(saved);
    }

    public List<DocumentResponse> getAllDocuments(String userId) {
        return documentRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
            .map(this::toResponse)
            .collect(Collectors.toList());
    }

    public DocumentResponse getDocument(String documentId, String userId) {
        Document document = documentRepository.findByIdAndUserId(documentId, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Document not found"));
        return toResponse(document);
    }

    @Transactional
    public void deleteDocument(String documentId, String userId) {
        Document document = documentRepository.findByIdAndUserId(documentId, userId)
            .orElseThrow(() -> new UnauthorizedAccessException("You do not have access to this document"));
        documentRepository.delete(document);
    }

    public DocumentStatusResponse getStatus(String documentId, String userId) {
        Document document = documentRepository.findByIdAndUserId(documentId, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Document not found"));

        return DocumentStatusResponse.builder()
            .documentId(document.getId())
            .status(document.getStatus())
            .message("Processing status for " + document.getFileName())
            .build();
    }

    public Document getDocumentEntity(String documentId, String userId) {
        return documentRepository.findByIdAndUserId(documentId, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Document not found"));
    }

    private String extractFileType(String fileName) {
        String lower = fileName.toLowerCase();
        if (lower.endsWith(".pdf")) return "PDF";
        if (lower.endsWith(".docx")) return "DOCX";
        if (lower.endsWith(".txt")) return "TXT";
        return "UNKNOWN";
    }

    private DocumentResponse toResponse(Document document) {
        return DocumentResponse.builder()
            .id(document.getId())
            .fileName(document.getFileName())
            .fileType(document.getFileType())
            .fileSize(document.getFileSize())
            .pageCount(document.getPageCount())
            .status(document.getStatus())
            .createdAt(document.getCreatedAt())
            .build();
    }
}

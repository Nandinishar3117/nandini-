package com.docqueryai.chat;

import com.docqueryai.document.Document;
import com.docqueryai.document.DocumentService;
import com.docqueryai.rag.generation.RagGenerationService;
import com.docqueryai.user.UserService;
import com.docqueryai.vector.DocumentChunk;
import com.docqueryai.vector.DocumentChunkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ChatController {

    private final DocumentChunkRepository documentChunkRepository;
    private final DocumentService documentService;
    private final UserService userService;
    private final RagGenerationService ragGenerationService;

    @PostMapping("/chat")
    public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request) {
        String userId = getCurrentUserId();
        List<Document> documents = request.documentIds().stream()
            .map(documentId -> documentService.getDocumentEntity(documentId, userId))
            .toList();

        List<DocumentChunk> chunks = documents.stream()
            .flatMap(document -> documentChunkRepository.findByDocumentIdOrderByChunkIndexAsc(document.getId()).stream())
            .toList();

        RagGenerationService.RagAnswer answer = ragGenerationService.answerQuestion(request.question(), chunks);
        return ResponseEntity.ok(new ChatResponse(answer.answer(), answer.sources()));
    }

    public record ChatRequest(List<String> documentIds, String question) {}
    public record ChatResponse(String answer, List<RagGenerationService.RagSource> sources) {}

    private String getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication.getName() == null) {
            throw new IllegalStateException("No authenticated user found");
        }
        return userService.findById(authentication.getName()).getId();
    }
}

package com.docqueryai.rag.ingestion;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.apache.tika.Tika;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class TextExtractionService {

    private final Tika tika = new Tika();

    public ExtractedDocument extractText(String documentName, InputStream inputStream) {
        try {
            String content = extractContent(documentName, inputStream);
            return new ExtractedDocument(documentName, content);
        } catch (Exception e) {
            throw new IllegalStateException("Failed to extract text from document: " + documentName, e);
        }
    }

    private String extractContent(String documentName, InputStream inputStream) throws Exception {
        String lowerName = documentName.toLowerCase();

        if (lowerName.endsWith(".pdf")) {
            return extractPdfText(inputStream);
        }

        if (lowerName.endsWith(".docx") || lowerName.endsWith(".txt")) {
            return tika.parseToString(inputStream).replace("\r\n", "\n");
        }

        return tika.parseToString(inputStream).replace("\r\n", "\n");
    }

    private String extractPdfText(InputStream inputStream) throws Exception {
        try (PDDocument document = Loader.loadPDF(inputStream)) {
            PDFTextStripper stripper = new PDFTextStripper();
            return stripper.getText(document);
        }
    }

    public static class ExtractedDocument {
        private final String documentName;
        private final String content;

        public ExtractedDocument(String documentName, String content) {
            this.documentName = documentName;
            this.content = content;
        }

        public String getDocumentName() {
            return documentName;
        }

        public String getContent() {
            return content;
        }
    }
}

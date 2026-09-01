package com.docqueryai.rag.chunking;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChunkingService {

    @Value("${rag.chunk-size:1000}")
    private int chunkSize;

    @Value("${rag.chunk-overlap:200}")
    private int chunkOverlap;

    public List<String> chunkText(String text) {
        if (text == null || text.isBlank()) {
            throw new IllegalArgumentException("Input text is empty");
        }

        List<String> chunks = new ArrayList<>();
        if (chunkSize <= 0) {
            throw new IllegalArgumentException("Chunk size must be positive");
        }

        int start = 0;
        while (start < text.length()) {
            int end = Math.min(start + chunkSize, text.length());
            String chunk = text.substring(start, end).trim();
            if (!chunk.isEmpty()) {
                chunks.add(chunk);
            }
            if (end >= text.length()) {
                break;
            }
            start = Math.max(start + chunkSize - chunkOverlap, end - chunkOverlap);
        }

        return chunks;
    }
}

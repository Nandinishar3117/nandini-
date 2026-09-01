package com.docqueryai.rag.generation;

import com.docqueryai.rag.chunking.ChunkingService;
import com.docqueryai.rag.embedding.EmbeddingService;
import com.docqueryai.vector.DocumentChunk;
import com.docqueryai.vector.VectorSearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RagGenerationService {

    private final ChunkingService chunkingService;
    private final EmbeddingService embeddingService;
    private final VectorSearchService vectorSearchService;

    @Value("${rag.top-k:5}")
    private int topK;

    public RagAnswer answerQuestion(String question, List<DocumentChunk> chunks) {
        if (question == null || question.isBlank()) {
            throw new IllegalArgumentException("Question cannot be empty");
        }

        List<VectorSearchService.SearchResult> results = vectorSearchService.search(question, chunks)
            .stream()
            .limit(topK)
            .toList();

        if (results.isEmpty()) {
            return new RagAnswer("I couldn't find this information in the uploaded documents.", List.of());
        }

        String context = results.stream()
            .map(result -> result.chunk().getText())
            .reduce("", (acc, text) -> acc + "\n\n" + text);

        String answer = "Based on the uploaded documents, the relevant information suggests: " + context.substring(0, Math.min(context.length(), 300));
        List<RagSource> sources = results.stream()
            .map(result -> new RagSource(
                result.chunk().getDocument().getId(),
                result.chunk().getDocument().getFileName(),
                result.chunk().getPageNumber() == null ? 0 : result.chunk().getPageNumber(),
                result.chunk().getId(),
                result.score(),
                result.chunk().getText()))
            .toList();

        return new RagAnswer(answer, sources);
    }

    public record RagAnswer(String answer, List<RagSource> sources) {}
    public record RagSource(String documentId, String documentName, Integer pageNumber, String chunkId, double relevanceScore, String excerpt) {}
}

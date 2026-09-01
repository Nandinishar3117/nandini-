package com.docqueryai.vector;

import com.docqueryai.document.Document;
import com.docqueryai.rag.embedding.EmbeddingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VectorSearchService {

    private final EmbeddingService embeddingService;

    public List<SearchResult> search(String question, List<DocumentChunk> chunks) {
        List<Float> queryVector = embeddingService.embed(question);
        List<SearchResult> results = new ArrayList<>();

        for (DocumentChunk chunk : chunks) {
            double score = cosineSimilarity(queryVector, chunk.getEmbedding());
            results.add(new SearchResult(chunk, score));
        }

        return results.stream()
            .sorted(Comparator.comparingDouble(SearchResult::score).reversed())
            .limit(5)
            .toList();
    }

    private double cosineSimilarity(List<Float> v1, List<Float> v2) {
        if (v1 == null || v2 == null || v1.size() != v2.size() || v1.isEmpty()) {
            return 0.0;
        }

        double dot = 0.0;
        double norm1 = 0.0;
        double norm2 = 0.0;

        for (int i = 0; i < v1.size(); i++) {
            double a = v1.get(i);
            double b = v2.get(i);
            dot += a * b;
            norm1 += a * a;
            norm2 += b * b;
        }

        if (norm1 == 0 || norm2 == 0) {
            return 0.0;
        }

        return dot / (Math.sqrt(norm1) * Math.sqrt(norm2));
    }

    public record SearchResult(DocumentChunk chunk, double score) {
        public double score() {
            return score;
        }
    }
}

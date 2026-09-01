package com.docqueryai.rag.embedding;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class EmbeddingService {

    private final Random random = new Random();

    public List<Float> embed(String text) {
        if (text == null || text.isBlank()) {
            throw new IllegalArgumentException("Text cannot be empty for embedding generation");
        }

        List<Float> vector = new ArrayList<>();
        for (int i = 0; i < 1536; i++) {
            vector.add((float) (random.nextDouble() * 2.0 - 1.0));
        }
        return vector;
    }

    public List<List<Float>> embedBatch(List<String> texts) {
        return texts.stream().map(this::embed).toList();
    }
}

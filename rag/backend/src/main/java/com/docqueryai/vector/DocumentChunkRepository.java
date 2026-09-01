package com.docqueryai.vector;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentChunkRepository extends JpaRepository<DocumentChunk, String> {
    List<DocumentChunk> findByDocumentIdOrderByChunkIndexAsc(String documentId);
    List<DocumentChunk> findByDocumentUserId(String userId);
}

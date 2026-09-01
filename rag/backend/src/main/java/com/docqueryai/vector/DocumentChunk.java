package com.docqueryai.vector;

import com.docqueryai.document.Document;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "document_chunks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DocumentChunk {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "document_id", nullable = false)
    private Document document;

    @Column(nullable = false)
    private int chunkIndex;

    @Column(columnDefinition = "TEXT")
    private String text;

    @Column
    private Integer pageNumber;

    @ElementCollection
    @CollectionTable(name = "chunk_embeddings", joinColumns = @JoinColumn(name = "chunk_id"))
    @Column(name = "embedding_value")
    private List<Float> embedding;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = Instant.now();
    }
}

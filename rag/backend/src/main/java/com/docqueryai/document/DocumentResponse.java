package com.docqueryai.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DocumentResponse {
    private String id;
    private String fileName;
    private String fileType;
    private long fileSize;
    private Integer pageCount;
    private DocumentStatus status;
    private Instant createdAt;
}

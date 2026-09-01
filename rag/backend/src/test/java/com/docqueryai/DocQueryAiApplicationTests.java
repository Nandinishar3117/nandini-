package com.docqueryai;

import com.docqueryai.document.DocumentRepository;
import com.docqueryai.document.DocumentService;
import com.docqueryai.user.User;
import com.docqueryai.user.UserRepository;
import com.docqueryai.vector.DocumentChunkRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class DocQueryAiApplicationTests {

    @Autowired
    private DocumentService documentService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private DocumentChunkRepository documentChunkRepository;

    @Test
    void uploadDocumentProcessesTextIntoChunksAndMarksReady() {
        User user = userRepository.save(User.builder()
            .name("Alice")
            .email("alice@example.com")
            .password("secret")
            .build());

        MockMultipartFile file = new MockMultipartFile(
            "file",
            "sample.txt",
            "text/plain",
            "This is a sample document about quarterly growth and customer retention. " +
                "The company improved pipeline conversion and reduced churn across the region."
                .getBytes()
        );

        var uploaded = documentService.uploadDocument(file, user.getId());

        assertThat(uploaded.getStatus()).isEqualTo(com.docqueryai.document.DocumentStatus.READY);

        var saved = documentRepository.findById(uploaded.getId()).orElseThrow();
        assertThat(saved.getStatus()).isEqualTo(com.docqueryai.document.DocumentStatus.READY);
        assertThat(documentChunkRepository.findByDocumentIdOrderByChunkIndexAsc(saved.getId())).isNotEmpty();
    }
}

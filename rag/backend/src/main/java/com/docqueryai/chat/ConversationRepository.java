package com.docqueryai.chat;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ConversationRepository extends JpaRepository<Conversation, String> {
    List<Conversation> findByUserIdOrderByCreatedAtDesc(String userId);
    Optional<Conversation> findByIdAndUserId(String id, String userId);
}

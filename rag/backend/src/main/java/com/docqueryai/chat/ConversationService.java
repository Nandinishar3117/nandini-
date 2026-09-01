package com.docqueryai.chat;

import com.docqueryai.exception.ResourceNotFoundException;
import com.docqueryai.exception.UnauthorizedAccessException;
import com.docqueryai.user.User;
import com.docqueryai.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConversationService {

    private final ConversationRepository conversationRepository;
    private final UserRepository userRepository;

    public List<Conversation> getConversations(String userId) {
        return conversationRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public Conversation getConversation(String conversationId, String userId) {
        return conversationRepository.findByIdAndUserId(conversationId, userId)
            .orElseThrow(() -> new ResourceNotFoundException("Conversation not found"));
    }

    public void deleteConversation(String conversationId, String userId) {
        Conversation conversation = conversationRepository.findByIdAndUserId(conversationId, userId)
            .orElseThrow(() -> new UnauthorizedAccessException("You do not have access to this conversation"));
        conversationRepository.delete(conversation);
    }

    public Conversation createConversation(String userId, String title) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Conversation conversation = Conversation.builder()
            .user(user)
            .title(title)
            .build();

        return conversationRepository.save(conversation);
    }
}

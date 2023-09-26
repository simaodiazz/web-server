CREATE TABLE IF NOT EXISTS `messages` (
    `id` bigint(20) NOT NULL,
    `content` varchar(2000) NOT NULL,
    `user_id` bigint(20) NOT NULL,
    `parent_id` bigint(20),
    `chat_id` bigint(20) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`),
    FOREIGN KEY (`parent_id`) REFERENCES `messages` (`id`),
    PRIMARY KEY (`id`),
);
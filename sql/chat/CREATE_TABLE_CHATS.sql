CREATE TABLE IF NOT EXISTS `chats` (
    `id` bigint(20) NOT NULL,
    `name` varchar(255) NOT NULL,
    `user_id` bigint(20) NOT NULL,
    `enterprise_id` bigint(20) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`enterprise_id`) REFERENCES `enterprises` (`id`),
    PRIMARY KEY (`id`)
);
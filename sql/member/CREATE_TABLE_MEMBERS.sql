CREATE TABLE IF NOT EXISTS `members` (
    `user_id` bigint(20) NOT NULL,
    `enterprise_id` bigint(20) NOT NULL,
    `role` ENUM(
        "TRAINEE",
        "COLABORATOR",
        "ADMIN",
        "OWNER"
    ),
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`enterprise_id`) REFERENCES `enterprises` (`id`),
    PRIMARY KEY (`user_id`, `enterprise_id`)
)

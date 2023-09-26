CREATE TABLE IF NOT EXISTS `orders` (
    `id` bigint(20) NOT NULL,
    `request` varchar(2000) NOT NULL,
    `order_status` enum(
        "ORDER_CONFIRMED",
        "PROCESSING",
        "SHIPPED",
        "DELIVERED",
        "AWAITING_PAYMENT",
        "AWAITING_PICKUP"
    ) NOT NULL DEFAULT "PROCESSING",
    `user_id` bigint(20) NOT NULL,
    `enterprise_id` bigint(20) NOT NULL,
    `chat_id` bigint(20) NOT NULL,
    `rate_id` bigint(20) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`enterprise_id`) REFERENCES `enterprises` (`id`),
    FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`),
    FOREIGN KEY (`rate_id`) REFERENCES `rates` (`id`),
    PRIMARY KEY (`id`)
);

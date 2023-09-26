CREATE TABLE IF NOT EXISTS `rates` (
    `id` bigint(20) NOT NULL,
    `rate` int(11) NOT NULL,
    `message` varchar(2000) NOT NULL,
    `response` varchar(2000) NOT NULL,
    `user_id` bigint(20) NOT NULL,
    `order_id` bigint(20) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
    FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
    PRIMARY KEY (`id`)
);

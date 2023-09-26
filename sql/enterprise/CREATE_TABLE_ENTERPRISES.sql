CREATE TABLE IF NOT EXISTS `enterprise` (
    `id` bigint(20) NOT NULL,
    `name` varchar(255) NOT NULL,
    `description` varchar(2000) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

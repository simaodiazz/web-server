INSERT INTO
    `enterprises` (`id`, `name`, `description`,)
VALUES
    (?, ?, ?) ON DUPLICATE KEY
UPDATE
    `name` =
VALUES
    (`name`),
    `description` =
VALUES
    (`description`),
    `updated_at` = NOW();
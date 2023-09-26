INSERT INTO
    `users` (
        `id`,
        `name`,
        `username`,
        `email`,
        `password`
    )
VALUES
    (?, ?, ?, ?, ?) ON DUPLICATE KEY
UPDATE
    `name` =
VALUES
(`name`),
    `username` =
VALUES
(`username`),
    `email` =
VALUES
(`email`),
    `password` =
VALUES
(`password`),
    `updated_at` = NOW();
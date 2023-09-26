INSERT INTO
    `chats` (
        `id`,
        `name`,
        `user_id`,
        `enterprise_id`
    )
VALUES
    (?, ?, ?, ?) ON DUPLICATE KEY
UPDATE
    `name` =
VALUES
(`name`),
    `user_id` =
VALUES
(`user_id`),
    `enterprise_id` =
VALUES
(`enterprise_id`),
    `updated_at` = NOW();
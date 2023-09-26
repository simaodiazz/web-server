INSERT INTO
    `orders` (
        `id`,
        `request`,
        `order_status`,
        `user_id`,
        `enterprise_id`,
        `chat_id`
    )
VALUES
    (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    ) ON DUPLICATE KEY
UPDATE
    `request` =
VALUES
(`request`),
    `order_status` =
VALUES
(`order_status`),
    `user_id` =
VALUES
(`user_id`),
    `enterprise_id` =
VALUES
(`enterprise_id`),
    `chat_id` =
VALUES
(`chat_id`) `updated_at` = NOW();

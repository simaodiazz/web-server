INSERT INTO
    `rates` (
        `id`,
        `rate`,
        `message`,
        `response`,
        `user_id`,
        `order_id`,
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
    `rate` =
VALUES
(`rate`),
    `message` =
VALUES
(`message`),
    `response` =
VALUES
(`response`),
    `user_id` =
VALUES
(`user_id`),
    `order_id` =
VALUES
(`order_id`),
    `updated_at` = NOW();
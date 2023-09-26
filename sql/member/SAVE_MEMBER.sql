INSERT INTO
    `members` (
        `user_id`,
        `enterprise_id`,
        `role`
    )
VALUES
    (?, ?, ?) ON DUPLICATE KEY
UPDATE
    `user_id` =
VALUES
(`user_id`),
    `enterprise_id` =
VALUES
(`enterprise_id`),
    `role` =
VALUES
(`role`),
    `update_at` = NOW();
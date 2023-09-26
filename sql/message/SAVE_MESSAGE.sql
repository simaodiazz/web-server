INSERT INTO
    `messages` (
        `id`,
        `content`,
        `user_id`,
        `chat_id`,
        `parent_id`
    )
VALUES
    (?, ?, ?, ?, ?) ON DUPLICATE KEY
UPDATE
    content =
VALUES
(content),
    user_id =
VALUES
(user_id),
    chat_id =
VALUES
(chat_id),
    parent_id =
VALUES
(parent_id),
    updated_at = NOW();

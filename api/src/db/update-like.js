import { queryNormalized } from './connection-pool.js';

export async function updateLike(userId, beepId) {
  await queryNormalized(
    `
        INSERT INTO liked (liker_id, beep_Id) VALUES ($1, $2)
    `,
    [userId, beepId]
  );

  await queryNormalized(
    `
        UPDATE beep SET liked_count = like_count + 1 WHERE beepId = $1
    `,
    [beepId]
  );
}

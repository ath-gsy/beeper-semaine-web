import { updateLike } from '../db/update-like.js';

export async function likeBeep(userId, beepId) {
  await updateLike(userId, beepId);
}

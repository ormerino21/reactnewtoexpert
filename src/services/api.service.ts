import api from "../lib/api.lib";
import type { Character } from "../models";

/**
 * Get a character by Id
 * @param id - Character ID
 * @param signal - AbortSignal to cancel request (optional)
 */
export async function getCharacterById(
    id: number,
    signal?: AbortSignal
): Promise<Character> {
    const res = await api.get<Character>(`/character/${id}`, {signal})
    return res.data
}
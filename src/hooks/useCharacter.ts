import { useEffect, useRef, useState } from "react";
import type { ApiError, Character } from "../models";
import { getCharacterById } from "../services/api.service";

export function useCharacter(id: number | null) {
    const [data, setData] = useState<Character | null>(null)
    const [error, setError] = useState<ApiError | null>(null)
    const [loading, setLoading] = useState(false)

    // Save current AbortController to use it on clean up
    const controllerRef = useRef<AbortController | null>(null)

    async function fetchNow(currentId: number) {
        setLoading(true)
        setError(null)
        controllerRef.current?.abort()
        controllerRef.current = new AbortController()

        try {
            const result = await getCharacterById(currentId, controllerRef.current.signal)
            setData(result)
        } catch (err) {
            setData(null)
            setError(err as ApiError)
        } finally {
            setLoading(false)
        }
    }

    // If we pass the id to the hook, it will be triggered automatically
    useEffect(() => {
        if (id == null) return;

        fetchNow(id);
        return () => controllerRef.current?.abort();
    }, [id]);

    return {
        data,
        error,
        loading,
        refetch: () => (id != null) ? fetchNow(id) : undefined,
        cancel: () => controllerRef.current?.abort(),
    };
}
export interface ApiRef {
    name: string;
    url: string;
}

export type LifeStatus = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character {
    id: number;
    name: string;
    status: LifeStatus;
    species: string;
    type: string;
    gender: Gender;
    origin: ApiRef;
    location: ApiRef;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface ApiError {
  status: number;      // HTTP status if exists
  message: string;     // Friendly message
  code?: string;       // Axios code (ECONNABORTED, etc.)
  details?: unknown;   // Payload error if exists
}
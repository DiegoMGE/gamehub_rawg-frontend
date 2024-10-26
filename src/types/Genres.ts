export interface GenreProps {
    id: number;
    name: string;
}

export interface FetchGenresResponse {
    counter: number;
    results: GenreProps[];
}
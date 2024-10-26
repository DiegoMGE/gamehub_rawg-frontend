export interface GenreProps {
    id: number;
    name: string;
    image_background: string;
}

export interface FetchGenresResponse {
    counter: number;
    results: GenreProps[];
}
import { Game } from "./Game";

export interface FetchGamesResponse {
    count: number;
    results: Game[]
}
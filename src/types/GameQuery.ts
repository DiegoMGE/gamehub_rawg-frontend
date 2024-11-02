import { Platform } from "./Game";
import { GenreProps } from "./Genres";

export interface GameQuery {
  genre: GenreProps | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
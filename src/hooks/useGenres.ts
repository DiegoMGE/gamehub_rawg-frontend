import { GenreProps } from "@/types/Genres";
import useData from "./useData";

const useGenres = () => useData<GenreProps>('/genres')

export default useGenres;

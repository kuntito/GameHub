import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;

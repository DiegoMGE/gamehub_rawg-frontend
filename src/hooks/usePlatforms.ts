import useData from "./useData";

interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

const usePlaforms = () => useData<PlatformProps>('/platforms/lists/parents');

export default usePlaforms;
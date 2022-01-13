import { Search } from '../components/Search/Search';
import { Repos } from '../components/repos/Repos';

export const Main = ({ doFetch, data, isLoading, isError }) => {
  return (
    <main>
      <Search doFetch={doFetch} />
      <Repos repos={data} isLoading={isLoading} isError={isError} />
    </main>
  );
};

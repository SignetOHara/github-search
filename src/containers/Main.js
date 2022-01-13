import { Search } from '../components/common/Search/Search';
import { Repos } from '../components/common/repos/Repos';

export const Main = ({ doFetch, data, isLoading, isError }) => {
  return (
    <main>
      <Search doFetch={doFetch} />
      <Repos repos={data} isLoading={isLoading} isError={isError} />
    </main>
  );
};

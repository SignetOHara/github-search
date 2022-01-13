import { useApi } from './hooks/useApi';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import { Repos } from './components/repos/Repos';
import './reset.css';

function App() {
  const [{ data, isLoading, isError }, doFetch] = useApi();

  return (
    <div className="App">
      <Navbar />
      <Search doFetch={doFetch} />
      <Repos repos={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}

export default App;

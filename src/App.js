import { useApi } from './hooks/useApi';
import { Navbar } from './components/Navbar/Navbar';
import { Main } from './containers/Main';
import { Project } from './components/Project/Project';
import { Routes, Route } from 'react-router-dom';
import './reset.css';

function App() {
  const [{ data, isLoading, isError }, doFetch] = useApi();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              data={data}
              isLoading={isLoading}
              isError={isError}
              doFetch={doFetch}
            />
          }
        />
        <Route path="/:user/:repo" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;

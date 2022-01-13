import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import { Repos } from './components/repos/Repos';
import './reset.css';

function App() {
  const [url, setUrl] = useState(``);
  const [isError, setIsError] = useState({
    status: false,
    msg: '',
  });

  return (
    <div className="App">
      <Navbar />
      <Search setUrl={setUrl} url={url} setIsError={setIsError} />
      <Repos url={url} isError={isError} setIsError={setIsError} />
    </div>
  );
}

export default App;

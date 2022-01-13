import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import { Users } from './components/users/Users';
import './reset.css';

function App() {
  const [url, setUrl] = useState('');

  return (
    <div className="App">
      <Navbar />
      <Search setUrl={setUrl} url={url} />
      <Users url={url} />
    </div>
  );
}

export default App;

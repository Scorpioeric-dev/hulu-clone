import "./App.css";
import { Header } from "./Components/Header";
import requests from './Components/requests'
import { Navigation } from "./Components/Navigation";
import { Results } from "./Components/Results";
import React, {useState}  from 'react'

const App = () => {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className="app">
      <Header />
      <Navigation setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
};

export default App;

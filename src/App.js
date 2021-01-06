import "./App.css";
import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Results } from "./Components/Results";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Results />
    </div>
  );
};

export default App;

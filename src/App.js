import Navbar from "./components/Navbar";
import Section from "./components/Section";
import data from "./data";

function App() {
  const section = data.map((item) => <Section item={item} />);
  return (
    <div className="App">
      <Navbar />
      <div className="main--section">{section}</div>
    </div>
  );
}

export default App;

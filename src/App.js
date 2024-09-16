import "./App.css";
import ImgMediaCard from "./components/Card";
import { projectData } from "./data/projectsData";

function App() {
  const Cards = () => {
    return projectData.map((data, i) => {
      return <ImgMediaCard key={`card-${i}`} data={data} />;
    });
  };
  return (
    <div className="App">
      <h1 style={{fontFamily: "cursive", margin: '3rem'}}>Some other projects built with 💖 by <a href="https://www.kmiqbal.com/" target="_blank" rel="noopener noreferrer">Iqbal</a></h1>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Cards />
      </div>
    </div>
  );
}

export default App;

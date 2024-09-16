import './App.css';
import ImgMediaCard from './components/Card';
import { projectData } from './data/projectsData';

function App() {
 const Cards = () => {
  return projectData.map((data, i)=> {
    return <ImgMediaCard key={`card-${i}`} data={data}/>
  })
 }
  return (
    <div className="App">
      <div style={{width: "70%", }}>

     <Cards/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import MainPage from './Components/MainPage'
import DailyDeals from './Components/DailyDeals';
import SpecialOrder from './Components/SpecialOrder';
import {Route, Routes} from "react-router-dom"
document.body.style.backgroundColor = "black";
const mainStyle ={
  background : "#00000",
  color : "#000"
}


function App() {
  return (
    <div className="App" style={mainStyle}>
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route  path='/daily-deals' element={<DailyDeals/>} />
        <Route  path='/special-order' element={<SpecialOrder/>} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <Image src="./assets/img/coverpic.jpg" fluid />
      <Image src="holder.js/100px250" fluid />
    </div>
  );
}

export default App;

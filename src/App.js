import logo from './logo.svg';
import './App.css';
import Dropper from './components/Dropper';
import StyledDropzone from './components/StyledDropper';

function App() {
  return (
    <div className="App">
      <Dropper />
      <br></br>
      <StyledDropzone />
    </div>
  );
}

export default App;

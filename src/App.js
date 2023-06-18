import logo from './logo.svg';
import './App.css';
import MouseParticles from 'react-mouse-particles'

function App() {
  return (
    <div className="App">
      <MouseParticles g={0} color="#FD1C03" cull="col,image-wrapper" radius="12" num="3"/>
      <header className="App-header">
       <span className='App-logo'>🕹</span>
        <p>
          Welcome to <span style={{color: 'red'}}>Arcade</span> Theory
        </p>
      </header>
    </div>
  );
}

export default App;

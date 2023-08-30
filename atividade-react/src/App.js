import './App.css';
import alegre from './imagens/alegre.png'
import bailarina from './imagens/bailarina.png'
import festa from './imagens/festa.png'
import rindo from './imagens/rindo.png'
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <img src={rindo} alt="Emoji sorrindo" title='sorrindo' height='100px' hidth='100px'/>
      <p>Clique no emoji para exibir o nome dele!</p>
      <img src={alegre} alt="emoji alegre" title='alegre' height='40px' hidth='40px'/>
      <img src={festa} alt="emoji festa" title='festa' height='40px' hidth='40px'/>
      <img src={bailarina} alt="emoji bailarina" title='bailarina' height='40px' hidth='40px'/>
    </div>
  );
}

export default App;

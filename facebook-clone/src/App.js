import './App.css';
import {FaFacebook, FaSearch, FaFacebookMessenger } from "react-icons/fa";
import rick from './img/rick.jpg';
import rick1 from './img/rick1.jpg';
import rick2 from './img/rick2.jpg';
import rick3 from './img/rick3.jpg';
import rickPerfil from './img/perfil.jpg';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='headerLeft'>
          <div className='logo-fb'>
                <FaFacebook />
               </div>
              <div className='search-fb'>
              <FaSearch />
             </div>
          </div>
          <div className='headerRigth'>
          <div className='plus-btn'>
            +
          </div>
          <div className='messsenger-fb'>
            <FaFacebookMessenger />

          </div>
         </div>
       </div>
       <div className='stories'>
                <div className='storieCard'style={{backgroundImage:`url(${rick})`}} >
                  <p>Luís Felipe</p>
                </div>
                <div className='storieCard'style={{backgroundImage:`url(${rick1})`}} >
                  <p>Luís Felipe</p>
                </div>
                <div className='storieCard'style={{backgroundImage:`url(${rick2})`}} >
                  <p>Luís Felipe</p>
                </div>
                <div className='storieCard'style={{backgroundImage:`url(${rick3})`}} >
                  <p>Luís Felipe</p>
                </div>
                <div className='storieCard'style={{backgroundImage:`url(${rick})`}} >
                  <p>Luís Felipe</p>
                </div>
       </div>
          <div className='feed'>
            <div className='feedForm'>
                  <img src={rickPerfil} alt='Foto de perfil'/>
                  <input type='text' placeholder='No que você está pensando?'/>
            </div>
          </div>
      </div>
  );
}

export default App;

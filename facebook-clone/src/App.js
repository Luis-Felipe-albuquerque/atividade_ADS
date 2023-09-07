import React, { useState } from 'react';
import './App.css';
import {FaFacebook, FaSearch, FaFacebookMessenger, FaHome,FaUserFriends,FaVideo, FaPhotoVideo, FaSmile,FaUser, FaNewspaper, FaShoppingBag} from "react-icons/fa";
import rick from './img/rick.jpg';
import rick1 from './img/rick1.jpg';
import rick2 from './img/rick2.jpg';
import rick3 from './img/rick3.jpg';
import rickPerfil from './img/perfil.jpg';


function App() {

  const [clickedIcon, setClickedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setClickedIcon(iconName);

    // Reverte a cor para a cor original após 500ms
    setTimeout(() => {
      setClickedIcon(null);
    }, 500);
  };


  return (
    <div className="App">
      <div className='header'>
        <div className='headerLeft'>
          <div className='logo-fb'>
                <FaFacebook />
               </div>
              <div className='search-fb'>
              <FaSearch/>
             </div>
             <div className='icons-top'>
             <div
          className={`home-fb ${clickedIcon === 'home' ? 'blue-icon' : ''}`}
          title='Página Inicial'
          onClick={() => handleIconClick('home')}
        >
          <FaHome />
        </div>
        <div
          className={`friends-fb ${clickedIcon === 'friends' ? 'blue-icon' : ''}`}
          title='Grupos'
          onClick={() => handleIconClick('friends')}
        >
          <FaUserFriends />
        </div>
        <div
          className={`video-fb ${clickedIcon === 'video' ? 'blue-icon' : ''}`}
          title='Vídeo'
          onClick={() => handleIconClick('video')}
        >
          <FaVideo />
        </div>
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
                  <p>Criar story</p>
                </div>
                <div className='storieCard'style={{backgroundImage:`url(${rick1})`}} >
                  <p>Joãozinho</p>
                </div>
                <div className='storieCard'style={{backgroundImage:`url(${rick2})`}} >
                  <p>Marquinho</p>
                </div>
                <div className='storieCard'style={{backgroundImage:`url(${rick3})`}} >
                  <p>Zezinho</p>
                </div>
                <div className='storieCard'style={{backgroundImage:`url(${rick})`}} >
                  <p>Nandinho</p>
                </div>
       </div>
          <div className='feed'>
            <div className='feedForm'>
                  <img src={rickPerfil} alt='Foto de perfil'/>
                  <input type='text' placeholder='No que você está pensando?'/>
            </div>
            <div className='feed-icons'>
            <div className='feed-icon'>
    <FaVideo />
    <span>Vídeo ao vivo</span>
  </div>
              <div className='feed-icon'>
                <FaPhotoVideo/>
                <span>Foto/Vídeo</span>
              </div>
              <div className='feed-icon'>
                <FaSmile/>
                <span>Sentimento/Atividade</span>
              </div>
            </div>
            <div className="left-sidebar">
  <div className="sidebar-item">
    <FaUser /> Meu perfil
  </div>
  <div className="sidebar-item">
    <FaUserFriends /> Amigos
  </div>
  <div className="sidebar-item">
    <FaNewspaper /> Feed
  </div>
  <div className="sidebar-item">
    <FaShoppingBag /> Marketplace
  </div>
  <div className="sidebar-item video">
    <FaVideo /> Vídeo
  </div>
</div>
<div className="right-sidebar">
  <div className="sidebar-header">
    <div className="contacts-title">
      <h2>Contatos</h2>
    </div>
  </div>
  <div className="contacts-list">
    <div className="contact">
      <div className="contact-icon">
        <img src={rickPerfil} alt="Ícone do contato" />
      </div>
      Joãozinho
    </div>
    <div className="contact">
      <div className="contact-icon">
        <img src={rickPerfil} alt="Ícone do contato" />
      </div>
      Marquinho
    </div>
    <div className="contact">
      <div className="contact-icon">
        <img src={rickPerfil} alt="Ícone do contato" />
      </div>
      Zezinho
    </div>
    <div className="contact">
      <div className="contact-icon">
        <img src={rickPerfil} alt="Ícone do contato" />
      </div>
      Nandinho
    </div>
    {/* Adicione mais contatos com ícones aqui */}
  </div>
</div>


          </div>
      </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/pjRzT0M/eu.png" 
          nome="Mariana Couto Maciel" 
          descricao="Oi, eu sou a Mari. Sou aluna do curso de Frontend com React da Labenu. Programação caiu no meu colo de paraquedas, mas aprendi a amar. Sou a louca dos livros e completamente eclética com música, e o resto é história!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-tvjvdBH_psNUADBhMc7TvYqKHcAi5bFucTYepBZhaE-scjSO32hDYD6-u0bwtjM51w&usqp=CAU"
        nome="Email:"
        descricao="marianacoutomaciel@labenu.com.br"
        />
        <CardPequeno
        imagem="https://w7.pngwing.com/pngs/30/177/png-transparent-ip-address-computer-icons-encapsulated-postscript-address-miscellaneous-logo-video-player.png"
        nome="Endereço:"
        descricao="Rua dos Alfeneiros, n° 4"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aprendendo Frontend com React e torcendo para logo entrar no mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Nem eu sei o que tô fazendo aqui!." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

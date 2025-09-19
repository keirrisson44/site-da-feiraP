
import { Link } from 'react-router-dom';
import './index.scss';

function App() {
  return (
    <div className="App">

      <div className="cabecalho">
        <div className="imagem">
          <img
            className="img-logo"
            src="/assets/image/logo_frei1-removebg-preview.png"
            alt="Logo Frei"
          />
        </div>

        <div className="links">
          <Link className='link'>Home</Link>
          <Link className='link' to='/cursos'>cursos</Link>
          <Link className='link' to='/cadastra'>cadastro</Link>
          
        </div>
      </div>

      <div className="titulo">
        <h1>
          <span className="frei">Frei</span> <span className="ano">2025</span>
        </h1>
      </div>

      <img className="instituto" src="/assets/image/instituto.jpg" alt="Instituto" />

      <img className="logo-feira" src="/assets/image/profisaaao.png" alt="Feira" />

      <h2>
        <span className="black">Esforço que </span>
        <span className="white">transforma</span>
        <span className="black">, e orgulho </span>
        <span className="white">permanece!</span>
      </h2>

      <img className="image-sentro" src="/assets/image/imagem.fundo.png" alt="Imagem de fundo" />

      <div className="text">
        <h3>
          Feira de Profissões <span className="yellow">2025</span>
        </h3>
        <br />
        <h4 className="trabalho">
          <span className="bold">Descubra novas possibilidades para o seu futuro!</span>
          <br /><br />
          <span className="bold2">O Instituto Nossa Senhora de Fátima</span> convida você para a 5ª Feira de Profissões!
          <br /><br />
          É a sua chance de conhecer os diferentes cursos, tirar suas dúvidas e encontrar
          <br />
          <span className="bold3">a profissão</span> dos seus sonhos!
          <br /><br />
          <span className="date">Data:</span> 27 de Setembro de 2025.
          <br /><br />
          <span className="local">Local:</span> Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo - SP
          <br /><br />
          <span className="inscrever">Inscreva-se agora</span> e garanta sua participação!
          <br />
          <a href="#" className="linkn">[Clique aqui para se cadastrar]</a>
        </h4>
      </div>

      <h5>Contatos</h5>

      <div className="imags-rede">
        <a href="#"><img className="novo1" src="/assets/image/watss.png" alt="WhatsApp" /></a>
        <a href="#"><img className="novo2" src="/assets/image/intagram.png" alt="Instagram" /></a>
        <a href="#"><img className="novo3" src="/assets/image/facbo.png" alt="Facebook" /></a>
      </div>

    </div>
  );
}

export default App;

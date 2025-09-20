import './index.scss';
import { Link } from 'react-router-dom';

function Cursos() {
  return (
    <div className='Pagina-cursos'>
        <div className="cabecalho">
        <div className="imagem">
          <img
            className="img-logo"
            src="/assets/image/logo_frei1-removebg-preview.png"
            alt="Logo Frei"
          />
        </div>

        <div className="links">
          <Link className='link' to='/'>Inicio</Link>
          <Link className='link' to='/cursos'>Cursos</Link>
          <Link className='link' to='/cadastra'>cadastra</Link>
        </div>
      </div>

      <div className="titulo">
        <h1>
          <span className="frei">Frei</span> <span className="ano">2025</span>
        </h1>
      </div>

      <img className="instituto" src="/assets/image/instituto.jpg" alt="Instituto" />

      <img className="logo-feira" src="/assets/image/profisaaao.png" alt="Feira" />

      <h2>ALGUNS DE NOSSOS CURSOS</h2>

<div className="cursos">

  <div className="cursos-parte">
    <img className="imagem-curso" src="/assets/image/download 11.png" alt="Curso de Informática" />
    <h3>Informática</h3>
    <p>
      Na <span className="bold11">Informática</span> você vai<br />
      aprender a montar computadores do zero,<br />
      programar, criar banco de dados, criar sites, etc.
      <br /><br />
     
    </p>
  </div>

  <div className="cursos-parte">
    <img className="imagem-curso" src="/assets/image/popoo.png" alt="Curso de Eletromecânica" />
    <h3>Eletromecânica</h3>
    <p>
      No curso de <span className="bold11">Eletromecânica</span>, você se tornará um técnico apto a atuar na instalação,
      manutenção e operação de sistemas que combinam componentes elétricos e mecânicos, com foco em equipamentos e máquinas industriais.
      <br /><br />
      
    </p>
  </div>

</div>

<div className="cursos2">

  <div className="cursos-parte2">
    <img className="imagem-curso" src="/assets/image/oososo.png" alt="Curso de Comunicação Visual" />
    <h3>Comunicação Visual</h3>
    <p>
      O curso de comunicação visual prepara profissionais para criar e desenvolver 
      projetos gráficos, utilizando imagens, textos e outros elementos visuais para 
      transmitir mensagens e informações. É um curso que abrange desde a elaboração de 
      peças publicitárias e materiais de marketing até a criação de identidade visual e sinalização.
      <br /><br />
      
    </p>
  </div>

  <div className="cursos-parte2">
    <img className="imagem-curso" src="/assets/image/iiii.png" alt="Curso de Administração" />
    <h3>Administração</h3>
    <p>
      O curso de administração é um bacharelado que forma profissionais com conhecimentos em diversas áreas da gestão,
      como finanças, marketing, recursos humanos e estratégia empresarial.
      <br /><br />
     
    </p>
  </div>

</div>

<div className="cursos3">

  <div className="cursos-parte3">
    <img className="imagem-curso" src="/assets/image/ingles.png" alt="Curso de Inglês" />
    <h3>Inglês</h3>
    <p>
      Um curso de inglês pode ser uma jornada de aprendizado transformadora, abrindo portas 
      para novas oportunidades pessoais e profissionais. Ele pode te ajudar a se comunicar
      com mais confiança, acessar um vasto conhecimento e vivenciar culturas diversas.
      <br /><br />
      
    </p>
  </div>

  <div className="cursos-parte3">
    <img className="imagem-curso" src="/assets/image/lddçd.png" alt="Curso de Automação Residencial e Robótica" />
    <h3>Automação Residencial e Robótica</h3>
    <p>
      O curso de Automação Residencial e Robótica forma profissionais para desenvolver
      e controlar sistemas automatizados em residências e edifícios, além de 
      introduzir conceitos de robótica. O formado pode atuar na criação,
      manutenção e consultoria de tecnologias de automação.
      <br /><br />
    
    </p>
  </div>

</div>


    </div>
  )
}
export default Cursos;
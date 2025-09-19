
import { Link } from 'react-router-dom';
import './index.scss';

export default function Cadastra(){
    return(
        <div className="cadastro-container">
  <div className="cabecalho-form">
    <img className="logo" src="/assets/image/logo_frei1-removebg-preview.png" alt="Logo Frei"/>
    <h1 className="titulo-cadastro">Frei <span>2025</span></h1>
  </div>

  <form className="form-cadastro">
    <label>Nome</label>
    <input type="text" placeholder="Digite seu nome" />

    <label>Curso que tem interesse</label>
    <input type="text" placeholder="Digite o curso" />

    <label>Chegará aproximadamente que horas?</label>
    <input type="time" />

    <label>Email</label>
    <input type="email" placeholder="Digite seu email" />

    <label>Como ficou sabendo da feira?</label>
    <select>
      <option>Selecione</option>
      <option>Amigos</option>
      <option>Redes sociais</option>
      <option>Escola</option>
    </select>

    <label>Telefone</label>
    <input type="tel" placeholder="(xx) xxxxx-xxxx" />

    <label>Já foi aluno do Frei?</label>
    <select>
      <option>Selecione</option>
      <option>Sim</option>
      <option>Não</option>
    </select>

    <label>Escolaridade</label>
    <select>
      <option>Selecione</option>
      <option>Ensino Fundamental</option>
      <option>Ensino Médio</option>
      <option>Ensino Superior</option>
    </select>

    <label>CPF</label>
    <input type="text" placeholder="000.000.000-00" />

    <button type="button" className="botao-cadastro">
      CADASTRE-SE
    </button>
  </form>
</div>

    )
}
import './App.css';
import git from './images/25231.png';
import turing from './images/alan.jpg';
import projeto01 from './images/projeto1.png';
import Formulario from './images/Formulario.png';
function App() {
  return (
    <div class="btn-group btn-group-lg" role="group" aria-label="...">
      <header>
        <nav id="navbar">
          <ul class="nav-list">
            <li>
              <a href="#profile-link" target="_blank" id="profile-link">Sobre</a>
            </li>
            <li>
              <a href="#projects">Trabalho</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="espaco"></div>
      <section id="welcome-section">
        <h1 class="apresentacao">Oi Eu sou Camila!</h1>
        <p class="detalhe">Uma desenvolvedora web</p>
      </section>

      <section id="projects">
        <h3 class="project-tile">Estes são alguns dos meus projetos</h3>
        <div><h4 class="text-center">Projeto 1-Spring Boot + React</h4></div>
        <a id="projeto01"
          class="list-group-item list-group-item-action active" href="https://github.com/Milasousa/Projeto05">
          <img src={projeto01} className="img-fluid" alt="projeto01" />
        </a>
      </section>
      <section id="projects">
        <div><h4 class="text-center">Projeto 2-Página Web Turing</h4></div>
        <a id="projeto02"
          class="list-group-item list-group-item-action active" href="https://github.com/Milasousa/Projetos/tree/main/Projeto02-P%C3%A1gina%20de%20tributo">
          <img src={turing} className="projetoTuring" alt="projeto02" />
        </a>
      </section>
      <section id="projects">
        <div><h4 class="text-center">Projeto 3-Formulário</h4></div>
        <a id="projeto03"
          class="list-group-item list-group-item-action active" href="https://github.com/Milasousa/Projetos/tree/main/Projeto01-Formul%C3%A1rio%20de%20Pesquisa">
          <img src={Formulario} className="img-fluid" alt="projeto03" />
        </a>
      </section>
      <section id="contato">
        <h3>Vamos trabalhar juntos...</h3>
        <a id="perfilGit" href="https://github.com/Milasousa" target="_blank" ><h3>GitHub</h3>
          <img src={git} className="Github" alt="perfilGit" />
        </a>

      </section>
    </div>
  );
}

export default App;

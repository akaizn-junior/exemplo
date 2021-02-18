/* @jsx h */
import { Fragment, h, render } from 'preact';

// global styles
import './app.css';

// components
import {
  Navbar,
  Galeria
} from './components';

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="app-content">
        <Galeria
          height="350px"
          buttonsPos="bottom"
          name="galeria-panel-item"
          items={[
            <div>
          &nbsp;
            </div>,
            <div>
          &nbsp;
            </div>,
            <div>
          &nbsp;
            </div>,
            <div>
          &nbsp;
            </div>,
            <div>
          &nbsp;
            </div>
          ]}
        />
      </main>
      <footer>
        <div className="footer-img">
          <img alt="República de Angola" src="./assets/imagens/angola-footer.png" />
        </div>
        <div className="footer-lists">
          <div className="footer-menu">
            <h2>Área institucional</h2>
            <ul>
              <li>
                <a href="#estatuto">Estatuto orgánico</a>
              </li>
              <li>
                <a href="#organigrama">Organigrama</a>
              </li>
              <li>
                <a href="#quadro">Quadro de pessoal</a>
              </li>
              <li>
                <a href="#manual">Manual de acolhimento</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2>Agenda Política</h2>
            <ul>
              <li>
                <a href="#agenda">Agenda do Administrador(a)</a>
              </li>
              <li>
                <a href="#agenda">Agenda do vice-Administrador(a)</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2>Serviços</h2>
            <ul>
              <li>
                <a href="#suporte">Suporte Técnico</a>
              </li>
              <li>
                <a href="#listas">Listas telefonicos</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2>Publicações e Legislações</h2>
            <ul>
              <li>
                <a href="#artigos">Artigos</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

render(
  <App />,
  document.getElementById('app')
);

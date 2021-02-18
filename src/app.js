/* @jsx h */
import { Fragment, h, render } from 'preact';
import Router, { Link } from 'preact-router';

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
      <Router
        history={(() => {})()}
        onChange={() => {}}
      >
        <div path="/pagina" style={{
          height: '100vh',
          textAlign: 'center'
        }}>
          <h1>Template</h1>
        </div>
        <main path="/" className="app-content">
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
      </Router>
      <footer>
        <div className="footer-img">
          <img alt="República de Angola" src="./assets/imagens/angola-footer.png" />
        </div>
        <div className="footer-lists">
          <div className="footer-menu">
            <h2>Área institucional</h2>
            <ul>
              <li>
                <Link href="/pagina">Estatuto orgánico</Link>
              </li>
              <li>
                <Link href="/pagina">Organigrama</Link>
              </li>
              <li>
                <Link href="/pagina">Quadro de pessoal</Link>
              </li>
              <li>
                <Link href="/pagina">Manual de acolhimento</Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2>Agenda Política</h2>
            <ul>
              <li>
                <Link href="/pagina">Agenda do Administrador(a)</Link>
              </li>
              <li>
                <Link href="/pagina">Agenda do vice-Administrador(a)</Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2>Serviços</h2>
            <ul>
              <li>
                <Link href="/pagina">Suporte Técnico</Link>
              </li>
              <li>
                <Link href="/pagina">Listas telefonicos</Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2>Publicações e Legislações</h2>
            <ul>
              <li>
                <Link href="/pagina">Artigos</Link>
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

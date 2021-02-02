/* @jsx h */
import { h } from 'preact';

import './main.css';

import {
  Navbar,
  Galeria,
  Info
} from '..';

export function Main() {
  return (
    <div className="main-view">
      <Navbar />
      <div className="main-panel-wrapper">
        <section>
          <Galeria />
          <div className="main-noticias">
            <div className="main-noticias-header">
              <span>Os deputados a Assembleia Nacional aprovaram nesta quinta-feira, 24 de Maio</span>
              <button>Ver todas</button>
            </div>
            <div>
              <img alt="Noticias imagem" src="./assets/imagens/covidpic.png" />
            </div>
          </div>
          <div className="main-artigos"></div>
        </section>
        <section>
          <Info />
        </section>
      </div>
    </div>
  );
}

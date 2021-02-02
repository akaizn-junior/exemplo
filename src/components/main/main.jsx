/* @jsx h */
import { h } from 'preact';

import './main.css';

import {
  Navbar,
  Galeria,
  Info,
  Opiniao
} from '..';

export function Main() {
  return (
    <div className="main-view">
      <Navbar />
      <div className="main-panel-wrapper">
        <section>
          <Galeria
            height="500px"
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
          <div className="main-noticias">
            <div className="main-noticias-header">
              <span>Os deputados a Assembleia Nacional aprovaram nesta quinta-feira, 24 de Maio</span>
              <button>Ver todas</button>
            </div>
            <div>
              <img alt="Noticias imagem" src="./assets/imagens/covidpic.png" />
            </div>
          </div>
          <div className="main-artigos">
            <Opiniao />
          </div>
        </section>
        <section>
          <Info />
        </section>
      </div>
    </div>
  );
}

/* @jsx h */
import { h } from 'preact';

import './opiniao.css';

import {
  Galeria
} from '../';

export function Opiniao() {
  return (
    <div className="opiniao-wrapper">
      <Galeria
        height="175px"
        buttonsPos="top"
        name="galeria-opiniao-item"
        items={[
          <div>
            <img alt="Artigos de opiniao"
              src="./assets/imagens/artigospic.png" />
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
    </div>
  );
}

/* @jsx h */
import { h } from 'preact';

import './info.css';

export function Info() {
  return (
    <div className="info-wrapper">
      <div className="info-header info-block">Informativo</div>
      <div className="info-notas info-block">
        <img alt="Info notas" src="./assets/imagens/notaspic.png" />
      </div>
      <div className="info-materias info-block">Materias de Realce</div>
      <div className="info-menu info-block">
        <ul>
          <li>Informacao ao publico</li>
          <li>Obras e projectos do governo</li>
          <li>Comunicacoes de imprensa</li>
          <li>Resenha legislativa</li>
          <li>Titulos e Obrigacoes de Tesouro</li>
        </ul>
      </div>
      <div className="info-programacao info-block">
        <img alt="Info notas" src="./assets/imagens/programacaopic.png" />
      </div>
    </div>
  );
}

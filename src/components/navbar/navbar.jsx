/* @jsx h */
import { h } from 'preact';

import './navbar.css';

export function Navbar() {
  return (
    <navbar>
      <div className="navbar-top">
        <ul>
          <li>Orgaos auxiliares do presidente da republica</li>
          <li>Portal dos OAPR</li>
          <li>Gabinete de tecnologias de informacao</li>
        </ul>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>Inicio</li>
          <li>Institucional</li>
          <li>Agenda Politica</li>
          <li>Servicos</li>
          <li>Publicacoes</li>
          <li>Legislacao</li>
        </ul>
      </div>
    </navbar>
  );
}

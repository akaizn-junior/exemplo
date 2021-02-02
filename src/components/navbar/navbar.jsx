/* @jsx h */
import { h } from 'preact';

import './navbar.css';

// components
import {
  Menu
} from '../';

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
      <Menu
        className="navbar-menu"
        data={[
          {
            text: 'Inicio',
            link: '#inicio'
          },
          {
            text: 'Institucional',
            link: '#intitucional'
          },
          {
            text: 'Agenda politica',
            link: '#agenda'
          },
          {
            text: 'Servicos',
            link: '#servicos',
            submenu: [
              {
                text: 'Servicos sociais',
                link: ''
              },
              {
                text: 'Suporte tecnico',
                link: ''
              },
              {
                text: 'Lista Telefonica',
                link: ''
              },
              {
                text: 'Despacho Electronico',
                link: ''
              }
            ]
          },
          {
            text: 'Publicacoes',
            link: '#publicacoes'
          },
          {
            text: 'Legislacao',
            link: '#legislacao'
          }
        ]}
      />
    </navbar>
  );
}

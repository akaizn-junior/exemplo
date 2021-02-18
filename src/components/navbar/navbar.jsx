/* eslint-disable max-len */
/* @jsx h */
import { h } from 'preact';
import { Link } from 'preact-router';

import './navbar.css';

export function Navbar() {
  return (
    <navbar className="navbar-top">
      <h1 title="Administrações">
        <Link href="/" className="home-link">Administrações</Link>
      </h1>
      <div className="navbar-logo" title="Administrações">
        <Link href="/" className="home-link">
          <img
            alt="República de Angola Insignia"
            src="./assets/imagens/insignia.png"
            width="100"
          />
        </Link>
      </div>
      <div className="navbar-ham">
        <button
          className="nav-open-menu"
          onClick={() => {
            const nav = document.querySelector('.navbar-list');
            nav && nav.classList.add('nav-menu-open');
          }}
        >
          <svg width="16" height="16" viewBox="0 0 32 32">
            <title>Menu</title>
            <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
          </svg>
          <span>Menu</span>
        </button>
      </div>
      <div className="navbar-list">
        <button
          className="nav-close-menu"
          onClick={() => {
            const nav = document.querySelector('.navbar-list');
            nav && nav.classList.remove('nav-menu-open');
          }}
        >
          <svg width="16" height="16" viewBox="0 0 32 32" fill="white">
            <title>Fecha Menu</title>
            <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
          </svg>
        </button>
        <div className="nav-menu">
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
        <div className="nav-menu">
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
        <div className="nav-menu">
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
        <div className="nav-menu">
          <h2>Publicações e Legislações</h2>
          <ul>
            <li>
              <Link href="/pagina">Artigos</Link>
            </li>
          </ul>
        </div>
      </div>
    </navbar>
  );
}

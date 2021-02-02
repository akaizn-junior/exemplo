/* @jsx h */
import { h } from 'preact';

import './menu.css';

export function Menu() {
  return (
    <section className="app-menu-wrapper">
      <div className="app-menu">
        <p className="app-menu-header">Inicio</p>
        <ul className="app-menu-list">
          <li>Institucional</li>
          <li>OAPR</li>
          <li>Estatuto oragnico</li>
          <li>Organigrama</li>
          <li>Quadro de pessoal</li>
          <li>Quem e Quem</li>
          <li>Manual de acolhimento</li>
          <li>Regulamento interno</li>
        </ul>
        <ul className="app-menu-list">
          <li>Agenda politica</li>
          <li>Agenda do presidente</li>
          <li>Agenda do vice-presidente</li>
          <li>Agenda da 1 Dama</li>
        </ul>
        <ul className="app-menu-list">
          <li>Servicos</li>
          <li>Suporte tecnico</li>
          <li>Lista Telefonica</li>
          <li>Dispacho electronico</li>
        </ul>
        <ul className="app-menu-list">
          <li>Publicacoes</li>
          <li>Sala de imprensa</li>
          <li>Artigos de opiniao</li>
          <li>Eventos e palestras</li>
          <li>Galeria</li>
        </ul>
        <ul className="app-menu-list">
          <li>Legislacao</li>
          <li>Legislacao complementar</li>
          <li>Circular</li>
        </ul>
        <ul className="app-menu-list">
          <li>Fale conosco</li>
        </ul>
      </div>
      <div className="app-menu">
        <ul>
          <li>Necrologia</li>
          <li>Aniversario</li>
          <li>Restaurante</li>
          <li>Rede social corporativa</li>
          <li>Links uteis</li>
        </ul>
      </div>
    </section>
  );
}

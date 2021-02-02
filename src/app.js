/* @jsx h */
import { h, render } from 'preact';

// global styles
import './app.css';

// components
import {
  Main,
  Menu
} from './components';

function App() {
  return (
    <div className="app-layout">
      <section>
        <Menu
          header={'Inicio'}
          data={[
            [
              {
                text: 'Institucional',
                link: '#intitucional'
              },
              {
                text: 'OAPR',
                link: '#oapr'
              },
              {
                text: 'Estatuto organico',
                link: '#organico'
              },
              {
                text: 'Organigrama',
                link: '#organigrama'
              },
              {
                text: 'Quadro de Pessoal',
                link: '#pessoal'
              },
              {
                text: 'Quem e Quem',
                link: '#quem'
              },
              {
                text: 'Manual de acolhimento',
                link: '#acolhimento'
              },
              {
                text: 'Regulamento Interno',
                link: '#interno'
              }
            ],
            [
              {
                text: 'Agenda politica',
                link: '#agenda'
              },
              {
                text: 'Agenda do presidente',
                link: '#agrenda-pres'
              },
              {
                text: 'Agenda do vice-presidente',
                link: '#agrenda-vice'
              },
              {
                text: 'Agenda da 1 dama',
                link: '#agenda-dama'
              }
            ],
            [
              {
                text: 'Servicos',
                link: '#servicos-sociais'
              },
              {
                text: 'Suporte tecnico',
                link: '#suporte-tecnico'
              },
              {
                text: 'Lista telefonica',
                link: '#lista-telefonica'
              },
              {
                text: 'Despacho Electronico',
                link: '#despacho'
              }
            ],
            [
              {
                text: 'Publicacoes',
                link: '#publicacoes'
              },
              {
                text: 'Sala de imprensa',
                link: '#sala-imprensa'
              },
              {
                text: 'Artigos de opiniao',
                link: '#artigos-opiniao'
              },
              {
                text: 'Eventos e Palestras',
                link: '#eventos-palestras'
              },
              {
                text: 'Galeria',
                link: '#galeria'
              }
            ],
            [
              {
                text: 'Legislacao',
                link: '#legislacao'
              },
              {
                text: 'Legislacao complementar',
                link: '#legi-comp'
              },
              {
                text: 'Circular',
                link: '#circular'
              }
            ],
            [
              {
                text: 'Fale conosco',
                link: '#fale-conosco'
              }
            ]
          ]}
        />
        <Menu
          data={[
            {
              text: 'Necrologia',
              link: '#necrologia'
            },
            {
              text: 'Aniversario',
              link: '#aniversario'
            },
            {
              text: 'Restaurante',
              link: '#restaurante'
            },
            {
              text: 'Rede social corporativa',
              link: '#rede-social'
            },
            {
              text: 'Links Uteis',
              link: '#links'
            }
          ]}
        />
      </section>
      <Main />
    </div>
  );
}

render(
  <App />,
  document.getElementById('app')
);

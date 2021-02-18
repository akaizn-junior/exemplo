/* @jsx h */
import { h } from 'preact';

import { classNameBuilder } from '../../utils/browser';

import './galeria.css';

function showGaleriaPanel(name, n) {
  return function(_e) {
    const elem = document.getElementById(`${name}-${n}`);
    const all = document.querySelectorAll(`.${name}-paneis > .show-galeria-panel`);
    if (all) {
      all.forEach(target => {
        target.classList.remove('show-galeria-panel');
      });
    }
    elem && elem.classList.add('show-galeria-panel');
  };
}

export function Galeria(props) {
  const {
    buttonsPos,
    name,
    items,
    width,
    height
  } = props;

  const _items = items || [];

  const botoesC = classNameBuilder({
    'galeria-button-bottom-right': buttonsPos === 'bottom',
    'galeria-button-top-left': buttonsPos === 'top'
  }, 'galeria-button');

  return (
    <div className="galeria-wrapper">
      <div className={botoesC}>
        {_items.map((_item, i) => <button
          onMouseDown={showGaleriaPanel(name, i + 1)}
        >{i + 1}</button>)
        }
      </div>
      <div className={`${name}-paneis`}>
        {_items.map((item, i) => {
          if (i === 0) {
            const item0C = classNameBuilder({
              'show-galeria-panel': true
            }, item.props.className);

            item.props.className = item0C;
          }

          if (!item.props.style) {
            item.props.style = {};
          }

          item.props.id = `${name}-${i + 1}`;

          const itemC = classNameBuilder({
            'galeria-panel-item': true
          }, item.props.className);

          item.props.className = itemC;

          item.props.style.width = width;
          item.props.style.height = height;
          return item;
        })}
      </div>
    </div>
  );
}

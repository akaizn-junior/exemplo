/* @jsx h */
import { h } from 'preact';

import { isArray, isObj } from '../../utils/browser';

import './menu.css';

export function Menu(props) {
  const {
    header,
    data
  } = props;

  const _data = data || [];

  return (
    <section className="app-menu-wrapper">
      <div className="app-menu">
        <p className="app-menu-header">{header || ''}</p>
        {_data.map((dataItem, i) => {
          if (isObj(dataItem)) {
            return <ul>
              <li key={i}>
                <a href={dataItem.link}>{dataItem.text}</a>
              </li>
            </ul>;
          }

          if (isArray(dataItem)) {
            return <ul className="app-menu-list">
              {dataItem.map((dt, j) =>
                <li key={j}>
                  <a href={dt.link}>{dt.text}</a>
                </li>
              )}
            </ul>;
          }

          return '';
        })}
      </div>
    </section>
  );
}

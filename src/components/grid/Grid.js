import {CalcComponent} from '@core/CalcComponent';

export class Grid extends CalcComponent {
  static className = 'grid';

  constructor($root) {
    super($root, {
      name: 'Grid',
      listeners: ['click'],
    });
  }

  toHTML() {
    return `<div class="button">
              <p class="button__text">C</p>
            </div>
            <div class="button">
              <p class="button__text">±</p>
            </div>
            <div class="button">
              <p class="button__text">%</p>
            </div>
            <div class="button button--op">
              <p class="button__text">+</p>
            </div>
            <div class="button">
              <p class="button__text">1</p>
            </div>
            <div class="button">
              <p class="button__text">2</p>
            </div>
            <div class="button">
              <p class="button__text">3</p>
            </div>
            <div class="button button--op">
              <p class="button__text">&mdash;</p>
            </div>
            <div class="button">
              <p class="button__text">4</p>
            </div>
            <div class="button">
              <p class="button__text">5</p>
            </div>
            <div class="button">
              <p class="button__text">6</p>
            </div>
            <div class="button button--op">
              <p class="button__text">&times;</p>
            </div>
            <div class="button">
              <p class="button__text">7</p>
            </div>
            <div class="button">
              <p class="button__text">8</p>
            </div>
            <div class="button">
              <p class="button__text">9</p>
            </div>
            <div class="button button--op">
              <p class="button__text">/</p>
            </div>
            <div class="button">
              <p class="button__text">0</p>
            </div>
            <div class="button">
              <p class="button__text">.</p>
            </div>
            <div class="button button--equal">
              <p class="button__text">=</p>
            </div>
  `;
  }

  onClick(event) {
    console.log('Grid: onClick', event);
  }
}

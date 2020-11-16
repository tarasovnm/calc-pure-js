import {DomComponent} from '@core/DomComponent';

export class Expression extends DomComponent {
  static className = 'expression';

  toHTML() {
    return '<p class="expression__output">5x50+9</p>';
  }
}

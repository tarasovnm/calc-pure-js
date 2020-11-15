import {CalcComponent} from '@core/CalcComponent';

export class Expression extends CalcComponent {
  static className = 'expression';

  toHTML() {
    return '<p class="expression__output">5x50+9</p>';
  }
}

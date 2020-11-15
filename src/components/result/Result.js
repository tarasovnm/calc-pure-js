import {CalcComponent} from '@core/CalcComponent';

export class Result extends CalcComponent {
  static className = 'result';

  toHTML() {
    return '<p class="result__uotput">259</p>';
  }
}

import {DomComponent} from '@core/DomComponent';

export class Result extends DomComponent {
  static className = 'result';

  toHTML() {
    return '<p class="result__uotput">259</p>';
  }
}

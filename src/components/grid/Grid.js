import {DomComponent} from '@core/DomComponent';
import {createGrid} from '@/components/grid/grid.template';

export class Grid extends DomComponent {
  static className = 'grid';

  constructor($root) {
    super($root, {
      name: 'Grid',
      listeners: ['click'],
    });
  }

  toHTML() {
    return createGrid();
  }

  onClick(event) {
    console.log('Grid: onClick', event);
  }
}

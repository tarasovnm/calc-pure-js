import {Calc} from '@/components/calc/Calc';
import {Expression} from '@/components/expression/Expression';
import {Grid} from '@/components/grid/Grid';
import {Result} from '@/components/result/Result';
import './scss/index.scss';

const calc = new Calc('#app', {
  components: [Expression, Result, Grid],
});

calc.render();

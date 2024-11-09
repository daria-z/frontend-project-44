import gamesWrapper from './utils/gamesWrapper.js';
import { rule, logic } from './games-logic/calc.js';

export default () => {
  gamesWrapper(rule, logic);
};

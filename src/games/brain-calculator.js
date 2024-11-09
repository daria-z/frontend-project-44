import gamesWrapper from './utils/gamesWrapper.js';
import { rule, logic } from './games-logic/calculator.js';

export default () => {
  gamesWrapper(rule, logic);
};

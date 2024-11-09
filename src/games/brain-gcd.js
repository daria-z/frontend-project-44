import gamesWrapper from './utils/gamesWrapper.js';
import { rule, logic } from './games-logic/gcd.js';

export default () => {
  gamesWrapper(rule, logic);
};

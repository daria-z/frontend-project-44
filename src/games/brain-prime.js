import gamesWrapper from './utils/gamesWrapper.js';
import { rule, logic } from './games-logic/prime.js';

export default () => {
  gamesWrapper(rule, logic);
};

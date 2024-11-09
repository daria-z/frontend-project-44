import gamesWrapper from './utils/gamesWrapper.js';
import { rule, logic } from './games-logic/even.js';

export default () => {
  gamesWrapper(rule, logic);
};

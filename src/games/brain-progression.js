import gamesWrapper from './utils/gamesWrapper.js';
import { rule, logic } from './games-logic/progression.js';

export default () => {
  gamesWrapper(rule, logic);
};

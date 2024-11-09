import gamesWrapper from "./utils/gamesWrapper.js";
import { rule, logic } from "./gamesLogic/gcd.js";

export default () => {
  gamesWrapper(rule, logic);
};

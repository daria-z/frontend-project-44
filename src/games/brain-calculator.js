import gamesWrapper from "./utils/gamesWrapper.js";
import { rule, logic } from "./gamesLogic/calculator.js";

export default () => {
  gamesWrapper(rule, logic);
};


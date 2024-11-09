import gamesWrapper from "./utils/gamesWrapper.js";
import { rule, innerlogic } from "./gamesLogic/calculator.js";

export default () => {
  gamesWrapper(rule, innerlogic);
};


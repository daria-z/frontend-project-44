import gamesWrapper from "./utils/gamesWrapper.js";
import { rule, logic } from "./gamesLogic/prime.js";

export default () => {
  gamesWrapper(rule, logic);
};


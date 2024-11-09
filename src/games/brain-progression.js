import gamesWrapper from "./utils/gamesWrapper.js";
import { rule, logic } from "./gamesLogic/progression.js";

export default () => {
  gamesWrapper(rule, logic);
};


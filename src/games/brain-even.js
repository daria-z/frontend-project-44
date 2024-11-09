import gamesWrapper from "./utils/gamesWrapper.js";
import { rule, logic } from "./gamesLogic/even.js";

export default () => {
  gamesWrapper(rule, logic);
};

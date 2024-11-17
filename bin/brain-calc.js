#!/usr/bin/env node
import gamesWrapper from '../src/games/utils/gamesWrapper.js';
import { rule, logic } from '../src/games/brain-calc.js';

gamesWrapper(rule, logic);

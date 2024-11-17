#!/usr/bin/env node
import gamesWrapper from '../src/games/utils/gamesWrapper.js';
import { rule, logic } from '../src/games/brain-even.js';

gamesWrapper(rule, logic);

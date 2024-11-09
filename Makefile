install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calculator:
	node bin/brain-calculator.js

brain-progression:
	node bin/brain-progression.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .

rm -rf ./node_modules

npm i
git update-index --skip-worktree ./src/version.ts

npm i -g source-map-explorer
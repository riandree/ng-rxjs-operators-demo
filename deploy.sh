#!/bin/bash

set -x
git rm docs/*
mkdir -p docs && echo "keep this folder" > keepme.git
git add docs/keepme.git
git commit -am "removed old contents of /docs folder for deployment"
git fetch origin
git merge -X theirs origin main
npm ci
ng build
cp /dist/ng-rxjs-operators-demo/browser/* /docs
git commit -am "new deployment"
git push --force origin deploy
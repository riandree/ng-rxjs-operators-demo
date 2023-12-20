#!/bin/bash

set -x
git rm docs/*
touch docs/keepme.git
git add docs/keepme.git
git commit -am "removed old contents of /docs folder for deployment"
git merge main
npm ci
ng build
cp /dist/ng-rxjs-operators-demo/browser/* /docs
git commit -am "new deployment"
git push --force origin deploy
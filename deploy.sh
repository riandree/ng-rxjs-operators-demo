#!/bin/bash

set -x
git rm docs/*
mkdir -p docs && echo "keep this folder" > docs/keepme.git
git add docs/keepme.git
git commit -am "removed old contents of /docs folder for deployment"
git fetch origin
git merge -X theirs origin main
sed -i 's\<base href="/">\<base href="/ng-rxjs-operators-demo/">\g' ./docs/index.html
npm ci
ng build
cp dist/ng-rxjs-operators-demo/browser/* docs
git add docs/*
git commit -m "new deployment"
git push --force origin deploy
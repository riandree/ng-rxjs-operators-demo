git rm docs/*
git commit -am "removed old contents of /docs folder for deployment"
git merge main
ng ci
ng build
cp /dist/ng-rxjs-operators-demo/browser/* /docs
git commit -am "new deployment"
git push origin deploy
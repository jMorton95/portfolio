rm -rf dist

npm run build
powershell -Command "Copy-Item -Path "\CNAME" -Destination "\Dist""

git checkout gh-pages

rm index.html

rm -rf assets

git add index.html
git add assets

cd dist
mv * ../
cd ..
rmdir dist

git add .

git commit -m "Automatic Deployment"

git push origin gh-pages

git checkout main
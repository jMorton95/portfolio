set -e

npm run build

powershell -Command "Copy-Item -Path "\CNAME" -Destination "\Dist""

git push origin :gh-pages && git subtree push --prefix dist origin gh-pages


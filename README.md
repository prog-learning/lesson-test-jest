# Lesson Test with Jest

## Lesson

commit 時に Jest を実行して,commit をテストする.

husky の install

https://typicode.github.io/husky/#/

```sh
yarn add --dev husky
```

```sh
yarn husky install
```

```sh
yarn husky add .husky/pre-commit "yarn test"
```

# Lesson Test with Jest

## Lesson

commit 時に Jest を実行して,commit をテストする.
husky の install を
明日までに実行する.

```sh
yarn add --dev husky
```

```sh
yarn husky install
```

```sh
yarn husky add .husky/pre-commit "yarn test"
```

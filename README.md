# Node + JWT Tutorial

## Example

- [【JWT 入門】Node.js と JWT を使って認証システムを構築してみよう](https://www.youtube.com/watch?v=9xxXKkwpRg4)

## Preparation

- create .env & config SECRET_KEY

```
$ cp .env.example .env
$ vi .env ※SECRET_KEY=hogehoge
```

## Run

```
$ npm run dev
```

## EndPoint

| URI       | Overview                                   |
| --------- | ------------------------------------------ |
| /register | Register & Issuance of Token               |
| /login    | Authenticate with Username + Email + Token |

[![CircleCI](https://circleci.com/gh/hgbao/weather-forecast/tree/main.svg?style=svg)](https://circleci.com/gh/hgbao/weather-forecast/tree/main)

## Presequisites

| Node   |
| ------ |
| 16.3.0 |

- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### Setup

1. Install dependencies

   ```bash
   yarn install
   ```

2. Setup repository

   ```bash
   yarn setup
   ```

---

## Development

### Start application

```bash
yarn dev
```

### Linter

- Check linter issues:

  ```bash
  yarn lint
  ```

- Fix basic linter issues:

  ```bash
  yarn format
  ```

- Check missing/unused dependencies:

  ```bash
  yarn depcheck
  ```

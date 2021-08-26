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

2. Setup environment variables

   - Copy `.env.sample` to `.env.local`

3. Setup repository

   ```bash
   yarn setup
   ```

---

## Development

### Start application

```bash
yarn dev
```

- The application will start on port `3000`

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

### Test

```bash
yarn test
```

### Simulate server environment

1. Start docker service
2. Run the command based on your OS
   | UNIX | Other |
   |---|---|
   | `yarn docker:prod ` | `yarn docker:dev ` |

**Note:** The application will start on port `80` instead of `4000`

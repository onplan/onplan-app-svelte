# Onplan App Svelte

Onplan app codebase using svelte v3

<br>

## ⚒️ Development

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
# Uses port 5173 by default
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## 🚀 Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

<br>
<br>

# 📗 API

## Stores

Application states that are reactive.

1. **isOnline** - True if connected to wifi/data REGARDLESS if have real internet connection. _READONLY._

2. **isActuallyOnline** - True if connected to wifi/data AND have real internet connection via http checking. With `reCheck()` utility function for updating the latest state. _READONLY._

```js
import { isOnline, isActuallyOnline } from '$lib/stores/browser';

// Note: Prefix stores with $ to access their values
consosle.log($isOnline); // log true or false
consosle.log($isActuallyOnline); // log true or false

// to update the latest "isActuallyOnline" value asynchronously
isActuallyOnline.reCheck();

// to get the latest "isActuallyOnline" value synchronously.
const withRealInternet = await isActuallyOnline.reCheck();
consosle.log(withRealInternet); // log true or false
```

Read more on: [Prefixing **\$** in store object to access value](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values)

3. to be continue...

### Install the dependencies

```sh
npm install @mantine/core @mantine/hooks @mantine/next @emotion/server @emotion/react
```

### Default theme

```js
const mantineTheme = {
  colorScheme: "dark",
  focusRing: "never",
  defaultRadius: "xs",
  primaryColor: "dark",
};
```

### Import the provider

```js
import { MantineProvider } from "@mantine/core";
```

```jsx
<MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
  <Component {...pageProps} />
</MantineProvider>
```

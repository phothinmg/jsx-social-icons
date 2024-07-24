# Jsx Social Icons with link

All of these icons are from simple icons - https://simpleicons.org/ - https://github.com/simple-icons/simple-icons

License - https://github.com/simple-icons/simple-icons?tab=CC0-1.0-1-ov-file#cc0-10-universal

Legal Disclaimer : https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md#disclaimer

## Install

```bash
npm i jsx-social-icons
```

```bash
pnpm i jsx-social-icons
```

```bash
yarn add  jsx-social-icons
```



## React

```ts
import ReactSocialIcon from "jsx-social-icons/react";

export function Home() {
  return (
    <main>
      <ReactSocialIcon
        name="github"
        href="https://github.com"
        size={36}
        fillColor="#673ab8"
        fillOpacity={0.9}
        title="Link to my github profile"
        target="_blank"
        className="My class"
      />
    </main>
  );
}
```

## Preact

```ts
import PreactSocialIcon from "jsx-social-icons/preact";

export function Home() {
  return (
    <div>
      <PreactSocialIcon
        name="github"
        href="https://github.com"
        size={36}
        fillColor="#673ab8"
        fillOpacity={0.9}
        title="Link to my github profile"
        target="_blank"
        className="My class"
      />
    </div>
  );
}
```

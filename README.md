# Jsx Social Icons with link

![svg](https://cdn.phothin.dev/icons/codepen.svg) ![svg](https://cdn.phothin.dev/icons/codesandbox.svg) ![svg](https://cdn.phothin.dev/icons/devdotto.svg)
![svg](https://cdn.phothin.dev/icons/discord.svg) ![svg](https://cdn.phothin.dev/icons/facebook.svg) ![svg](https://cdn.phothin.dev/icons/gitbook.svg)
![svg](https://cdn.phothin.dev/icons/github.svg) ![svg](https://cdn.phothin.dev/icons/gitlab.svg) ![svg](https://cdn.phothin.dev/icons/hashnode.svg)
![svg](https://cdn.phothin.dev/icons/jsfiddle.svg) 

![svg](https://cdn.phothin.dev/icons/line.svg) ![svg](https://cdn.phothin.dev/icons/linkedin.svg) ![svg](https://cdn.phothin.dev/icons/mastodon.svg)
![svg](https://cdn.phothin.dev/icons/medium.svg) ![svg](https://cdn.phothin.dev/icons/messenger.svg) ![svg](https://pub-d94f06e647584b8496cac0d43a6fecfb.r2.dev/icons/slack.svg)
![svg](https://cdn.phothin.dev/icons/stackedit.svg) ![svg](https://cdn.phothin.dev/icons/stackoverflow.svg) ![svg](https://cdn.phothin.dev/icons/telegram.svg)
![svg](https://cdn.phothin.dev/icons/viber.svg) 

![svg](https://cdn.phothin.dev/icons/wechat.svg) ![svg](https://cdn.phothin.dev/icons/whatsapp.svg) ![svg](https://cdn.phothin.dev/icons/wordpress.svg)
![svg](https://cdn.phothin.dev/icons/youtube.svg) ![svg](https://cdn.phothin.dev/icons/x.svg) 


***



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

```tsx
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

```tsx
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

## Options

| Name          | Description                            |    Default     |
| ------------- | -------------------------------------- | :------------: |
| `name`        | Name of icon                           |                |
| `href`        | HTML Anchor Element Attribute "href"   |     " # "      |
| `target`      | HTML Anchor Element Attribute "target" |   "\_blank"    |
| `className`   | HTML Anchor Element "className"        |      " "       |
| `title`       | Tooltip text for icon                  |  name of icon  |
| `size`        | Size for icon                          |       24       |
| `fillColor`   | Color for icon                         | "currentcolor" |
| `fillOpacity` | Opacity of icon. 0.1 to 1              |      0.7       |


***

All of these icons are from simple icons - https://simpleicons.org/ - https://github.com/simple-icons/simple-icons

License - https://github.com/simple-icons/simple-icons?tab=CC0-1.0-1-ov-file#cc0-10-universal

Legal Disclaimer : https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md#disclaimer

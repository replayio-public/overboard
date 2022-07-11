# Overboard Design System

The offical design system for the fictitious Replay Overboard store.

## Install

```bash
npm install @replay/overboard
```

## Usage

Import the overboard CSS file:

```css
@import url("@replayio/overboard/index.css");
```

Now you can use components like `Hoverboard` wherever you want:

```tsx
import { Hoverboard } from "@replay/overboard";

export default function App() {
  return <Hoverboard color="blue" rotate={90} />;
}
```

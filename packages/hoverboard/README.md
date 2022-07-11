# Replay Hoverboard

The official hoverboard asset for Replay.

## Install

```bash
npm install @replay/hoverboard
```

## Usage

Import the hoverboard CSS file:

```css
@import url("@replayio/hoverboard/index.css");
```

Now you can use the `Hoverboard` component wherever you want:

```tsx
import { Hoverboard } from "@replay/hoverboard";

export default function App() {
  return <Hoverboard color="blue" rotate={90} />;
}
```

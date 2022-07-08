# Overboard (⚠️ wip)

Welcome to Overboard, the ficticious online store that has a few bugs that need your help fixing! This site is a showcase of various bugs in a simplified React application to help demonstrate how Replay helps you debug code execution across time.

## Development

This is a monorepo powered by Yarn workspaces. The following workspaces are available, located in the [packages](/packages) directory:

- [hoverboard](/packages/hoverboard/)

  The official hoverboard of Replay that comes in a variety of colors.

- [site](/packages/site/)

  The NextJS site that powers our fictional online store.

```
yarn install
```

To start all of the dev servers, run the following in your terminal:

```
yarn dev
```

To filter which packages to run you can use the filter flag:

```
yarn dev --filter hoverboard
```

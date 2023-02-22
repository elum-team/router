# [![GitHub license](https://badgen.net/badge/license/MIT/blue)](https://github.com/elum-team/router/tree/master/dist/LICENSE) [![npm bundle size](https://img.shields.io/bundlephobia/min/@elum/router)](https://bundlephobia.com/package/@elum/router) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@elum/router)](https://bundlephobia.com/package/@elum/router)


# elum router

Elum Router - Router for vk mini apps on reactjs.

This is layered navigation for react applications. Each level will be independent of the others, which allows you to cost the application logic in more detail.

## Installation

> YARN

yarn add @elum/router

> NPM

npm i -s @elum/router


## Getting Started

### Router
Component that use elum router need **Router** to appear somewhere in the parent tree. A good place to put this is the root file **index**.

The initial application branch is specified in the **branch**.

```jsx
import { createRoot } from  'react-dom/client';
import App from 'App';

import { Router } from "@elum/router";

const app = document.getElementById("app") as HTMLElement;
const root = createRoot(app);
root.render(
	<Router branch={"startup"}>
		<App />
	</Router>
);
```

### nextPage

**Function** to update the navigation for the next snapshot. Used in a logic function or components.

**view**, **panel**, **modal**, **popout** - parameters reset the state of a higher level. If the "panel" parameter is passed to nextPage, the existing "modal" and "popout" parameters will be reset. And specifying only view resets the panel state to "default"
```ts
Partial<{
	view:  string;
	panel:  string;
	modal:  string;
	popout:  string;
	stay:  boolean | string; // set stay point
	freeze:  boolean; // freeze current branch
	clear:  boolean; // clean up the old branch
	params:  Record<string, string  |  number>; // set user parameters
}> 
```

```jsx

import { nextPage } from "@elum/router";

const App = () => {
	const handleClick = () => {
		nextPage({
			view: "settings",
			panel: "theme"
		});
	}
	return (<button onClick={handleClick}>NEXT PAGE</button>);
};
```

### backPage

**Function** to update the navigation for the back snapshot from branch. Used in a logic function or components.

```ts
Partial<{
	ignoreFreeze:  boolean;
	toStay:  boolean  |  string;
}>
```

```jsx
import { backPage } from "@elum/router";

const App = () => {
	const handleClick = () => {
		backPage();
	};
	return (<button onClick={handleClick}>BACK PAGE</button>);
};
```

### useParams

**Hook** to get params from last snapshot router. This hook is not update value params, value is fixed.

```jsx
import { useParams } from "@elum/router";

const App = () => {
	const params = useParams();
	return (<span>{params.id}</span>);
};
```

### useRouter

**Hook** to get value from active snapshot router. Accepts string **"view", "panel", "modal", "popout"**.
Allows you to get the current state of navigation elements.

```jsx
const  App = () => {
const  view  =  useRouter("view");
return (
	<Root  activeView={view}>
		<Startup  nav={"startup"} />
		<Main  nav={"main"} />
		<Error  nav={"error"} />
	</Root>
	)
};
```
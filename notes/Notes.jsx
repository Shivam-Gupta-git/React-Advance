// -> What are Hooks = Hooks are functions introduced in React 16.8 that let you use state and other React features inside functional components, without writing class components.

// Before hooks: State & lifecycle methods worked only in class components.

// -> Rules of Hooks:
// 1.	Call Hooks only at the top level (not inside loops, conditions, or nested functions).
// 2.	Call Hooks only in React functions (functional components or custom hooks).

// 1) useState = Manages local component state.
// 2) useEffect = Handles side effects (fetching data, subscriptions, DOM manipulation).
// 3) useContext = Access values from React Context without prop drilling.
// 4) useRef = Gives a mutable object that persists across renders. Often used to reference DOM elements.
// 5) useReducer = Alternative to useState for complex state logic.
// 6) useMemo & useCallback = Used for performance optimization (memoization).
// 7) useLayoutEffect = Similar to useEffect but runs synchronously after DOM mutations (before paint). Used rarely (e.g., measuring DOM size).
// 8) Custom Hooks = You can create your own hooks (functions starting with use) to reuse logic.



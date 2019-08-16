1. What problem does the context API help solve?

Context API tries to simplify state management as apps begins to scale. It also provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`actions` are pieces of information containing action types and some data we want to connect to the action type. It contains a 'type' and 'payload' property. Actions tell reducers _how_ to update the state.
`reducers` are the only place where state can update. They are pure functions that bind the Actions and Store together, never produce any side-effects, and handle the actions and replace the store.
`store` is where have every change we need in the app. It is a single JavaScript Object that is immutable, and changes to the state are done through pure functions. It is the single source of truth because this is where the state lives and cannot be updated directly.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is immutable while Component state is not. A good time to use Application state over the Component state would be if the application was complicated with many different layers accessing/changing the state. State would never be overwritten directly, but we would clone the state, object, modify the clone, then replace the original state with the new copy so no mutation occurs.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a node package to make the reducer flow asynchronous so API calls can be called from the action creators. It intercepts the normal Redux flow, and has its own 'paths' to choose from before the actions make it to the reducer. When an action creator is called, redux-thunk intercepts it and looks at what is returned (action returned = forward action to the reducer, function/thunk = invoke function and pass dispatch as argument).

5. What is your favorite state management system you've learned and this sprint? Please explain why!

So far, I think Redux is my favorite state management I've learned so far, as it has many different layers that are broken down to understand. Everything is slowly connecting together this week with Redux and it helps me understand props a little more.
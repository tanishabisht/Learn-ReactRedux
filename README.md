# React Redux
This is a basic application created using React and [FakeStore API](https://fakestoreapi.com/) to understand the flow of Redux in react.

## Dependencies Used
- [`axios`](https://www.npmjs.com/package/axios): API calls are easily handled using this
- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom): To handle routing in react
- `Materialize CSS`
- `redux`
  - `combineReducers():` to combine more than one reducer
  - `createStore():` to create a store
- `react-redux`
  - <Provider/>: to provide a store variable to all the components inside of it
  - `useSelector():` to extract varables in the store
  - `useDispatch():` to dispatch an action (to update the values of the variables in the store)

## Redux Flow
- CONSTANTS: Initialize the ACTION TYPE (what should be the name of your action)
- ACTIONS: Define the type and payload returned by performing a particular action
- REDUCER
  - Create reducers, each reducer manipulating a particular variable in the store
  - Performs different functions based on the ACTION TYPE
  - combine all reducers using `combineReducers()` since only one reducer can be passed into the store
- STORE
  - create a store using `createStore()`
  - to enable redux dev tools in the browser use `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` as a parameter while creating the store
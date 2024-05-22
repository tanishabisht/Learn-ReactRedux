# Learn - React Redux
This is the fifth installment of a seven-part series designed to improve your React development skills. This project focuses on integrating Redux in React application. Here, we are using [FakeStore API](https://fakestoreapi.com/) for dummy APIs.


## Getting Started with the Application
Follow these instructions to get the application running:
1. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
2. Install necessary packages:
   - `npm install`
3. Start the application:
   - To run the project : `npm start`
   - To run json-server : `json-server --watch data/notes.json --port 8080`


## Redux Flow
- **CONSTANTS**: Set up the ACTION TYPE, which defines the name of your action.
- **ACTIONS**: Specify the type and payload for actions based on user interactions or other events.
- **REDUCERS**:
  - Develop individual reducers that manage specific pieces of state.
  - Handle actions based on the ACTION TYPE provided.
  - Use `combineReducers()` to merge all reducers into a single reducing function, as the Redux store accepts only one reducer.
- **STORE**:
  - Create the Redux store with `createStore()`.
  - Enable Redux DevTools in the browser by including `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` as an argument when creating the store.


## Dependencies used
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


## React Learning Series
This project is part of a comprehensive React learning series:
1. [React Application for User Listing](https://github.com/tanishabisht/Learn-ReactUsersListing)
2. [Hooks in React](https://github.com/tanishabisht/Learn-ReactHooks)
3. [State Management in React](https://github.com/tanishabisht/Learn-ReactStateManagement) 
4. [Material-UI in React](https://github.com/tanishabisht/Learn-ReactMUI) 
5. [Redux in React](https://github.com/tanishabisht/Learn-ReactRedux) (this repository)
6. [Optimizing React Apps](https://github.com/tanishabisht/Learn-ReactOptimization)
7. [Building a Burger Builder App in React](https://github.com/tanishabisht/Learn-ReactBurgerBuilder)
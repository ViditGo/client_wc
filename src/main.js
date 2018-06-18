import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<App />, container);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import reducers from './reducers';
// import ReduxPromise from 'redux-promise';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
//     <div>
//     <Switch>
//     <Route path="/posts/new" component={ PostsNew } />
//     <Route path="/" component={ PostsIndex } />
//     {/* <Route path="/posts/:id" component={ } /> */}
//     </Switch>
//     </div>
//     </BrowserRouter>
//   </Provider>
//   , document.querySelector('.container'));




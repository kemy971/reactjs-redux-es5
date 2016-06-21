var React = require('react');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var ReactDOM = require('react-dom');
var App = require('./components/App');
var todos = require('./reducers/todos');

var store = createStore(todos,[]);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
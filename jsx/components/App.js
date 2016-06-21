var React = require('react');
var AddForm = require('../containers/AddForm');
var TodosList = require('../containers/TodosList');
var connect = require('react-redux').connect;

var App = React.createClass({
    displayName: 'App',
    render: function () {
        return (
            <div>
                <AddForm />
                <TodosList />
            </div>
        )
    }
});

module.exports = App;
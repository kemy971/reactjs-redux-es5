var React = require('react');
var Todo = require('./Todo');

var TodosList = React.createClass({
    displayName: 'TodosList',
    render: function () {
        var todos = this.props.todos;
        return (
            <ul>
                {todos.map(function (_todo) {
                return <Todo key={_todo.id} todo={_todo}/>
            })}
            </ul>
        )
    }
});

module.exports = TodosList;
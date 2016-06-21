var React = require('react');

var Todo = React.createClass({
    displayName: "Todo",
    render: function () {
        var todo = this.props.todo;
        return (
            <li>{todo.text}</li>
        )
    }
});

module.exports = Todo;
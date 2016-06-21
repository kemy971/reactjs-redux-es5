var React = require('react');

var AddForm = React.createClass({
    displayName: "AddForm",
    handlerAddTodo: function (e) {
        e.preventDefault();
        this.props.addTodo(this.inputText.value);
        this.inputText.value = '';
    },
    render: function () {
        return (
            <form onSubmit={this.handlerAddTodo}>
                <input type="text" ref={function(input) {
                  this.inputText = input;
                }.bind(this)}/>
                <input type="submit" value="ajouter"/>
            </form>
        )
    }
});

module.exports = AddForm;

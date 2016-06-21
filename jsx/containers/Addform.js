var AddForm = require('../components/AddForm');
var addTodo = require('../actions').addTodo;
var connect = require('react-redux').connect;

function mapDispatchToProps(dispatch) {
    return {
        addTodo: function (text) {
            dispatch(addTodo(text));
        }
    }
}

module.exports = connect(null,mapDispatchToProps)(AddForm);
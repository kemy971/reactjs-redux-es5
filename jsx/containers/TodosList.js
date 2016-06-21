var TodosList = require('../components/TodosList');
var connect = require('react-redux').connect;



function mapStateToProps(state){
    return {
        todos: state
    }
}

module.exports = connect(mapStateToProps)(TodosList);
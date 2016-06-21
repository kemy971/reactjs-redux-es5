function uid() {
    return Math.random().toString(34).slice(2);
}

module.exports.addTodo = function(text){
    return {
        type: 'ADD_TODO',
        id: uid(),
        text
    }
};

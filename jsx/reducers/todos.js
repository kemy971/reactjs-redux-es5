var todos = function(state, action){
    switch (action.type) {
        case 'ADD_TODO':
             state.push({
                id: action.id,
                text: action.text
            });

            //Important : return a new state to update react rendering
            return state.slice(0);
        default:
            return state;
    }
};

module.exports = todos;
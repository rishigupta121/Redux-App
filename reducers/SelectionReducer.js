export default (state, action) => {
    console.log(action);
        switch (action.type) {
            case 'select_library':
                return action.payload;
                break;

            default:
                return state;

        }
};
export default (state=0, action) => {
    console.log(state);
    console.log(action);
   // return null;
        switch (action.type) {
            case 'select_library':
                return action.payload;
                break;

            default:
                return state;
                break;

        }
};
export const selectLibrary = (libraryId) => {
     return {
         type: 'select_library',
         payload: libraryId
     };
 
}

    // switch (action.type) {
    //     case 'select_library':
    //         return action.payload;
    //         break;

    //     default:
    //         return state;

    // }
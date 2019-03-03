export const selectLibrary = (libraryId) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
            break;
    
        default:
        return state;
        
    }
 
}
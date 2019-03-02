export const selectLibrary= () => {
    return {
        type: 'select_library',
        payload: libraryId
    };
}
export const selectFilter = state => {
  console.log(state);
  return state.contacts.filter;
};
export const selectContactsList = state => state.contacts.phonebook;
export const selectEditOpen = state => state.contacts.isEditOpen;
export const selectIsLoading = state => state.contacts.phonebook.selectIsLoading;

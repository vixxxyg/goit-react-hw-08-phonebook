export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase().trim();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

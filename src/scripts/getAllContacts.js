import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  if (contacts) {
    return contacts;
  }
  return 'contacts not read';
};

console.log('getAllContacts: ', await getAllContacts());

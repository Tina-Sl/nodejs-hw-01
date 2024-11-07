import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  if (contacts) {
    return contacts.length;
  }
  return 'impossible to count';
};

console.log('Count contacts: ', await countContacts());

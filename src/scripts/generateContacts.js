import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const text = number === 1 ? 'contact' : 'contacts';
  const contacts = await readContacts();
  if (contacts) {
    const newContacts = Array.from({ length: number }, createFakeContact);
    contacts.push(...newContacts);
    if (await writeContacts(contacts)) {
      console.log(`generateContacts: ${number} ${text} added`);
      return;
    }
  }
  console.log(`generateContacts: ${number} ${text} were not added`);
};

generateContacts(5);

import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  let contacts = await readContacts();
  if (contacts) {
    const newContact = Array.from({ length: 1 }, createFakeContact);
    contacts = contacts.concat(newContact);
    if (await writeContacts(contacts)) {
      console.log('addOneContact: contact added');
      return;
    }
  }
  console.log('addOneContact: contact not added');
};

addOneContact();

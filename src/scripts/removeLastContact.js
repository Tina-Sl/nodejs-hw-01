import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let contacts = await readContacts();
  if (!contacts?.length) return;
  contacts.pop();
  if (await writeContacts(contacts)) {
    console.log('removeLastContact: completed successfully');
    return;
  }
  console.log('removeLastContact: not completed');
};

removeLastContact();

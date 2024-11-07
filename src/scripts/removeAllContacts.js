import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  if (await writeContacts([])) {
    console.log('removeAllContacts: completed successfully');
  } else {
    console.log('removeAllContacts: not completed');
  }
};

removeAllContacts();

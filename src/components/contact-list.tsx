import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db';

export const ContactList = () => {
    const contacts = useLiveQuery(() => db.contacts.toArray());

    return (
        <ul>
            {contacts?.map((contact) => (
                <li key={contact.id}>
                    {contact.id} {contact.firstName} {contact.lastName}
                </li>
            ))}
        </ul>
    );
};

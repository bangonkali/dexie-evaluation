import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../db";
import { ContactModel } from "../db/models/contact-model";

export const AddContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const addContact = async () => {
        try {
            const id = uuidv4();
            const contact = {
                firstName: firstName,
                lastName: lastName,
                id: id,
            };

            // validate
            const parseResult = ContactModel.safeParse(contact);

            if (!parseResult.success) {

                // validation failed
                console.error(JSON.stringify(parseResult.error.format));
            } else {

                // validation ok
                const response = await db.contacts.put(contact, id);
                console.log(`db put response: ${response}`);
            }
        } catch (ex) {
            console.error(`Error ${ex}`);
            throw new Error('Failed to save.', { cause: ex });
        }
    };

    return (
        <>
            <p>{firstName}</p>
            First Name:
            <input
                type="text"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
            />
            <p>{lastName}</p>
            Last Name:
            <input
                type="text"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
            />
            <button onClick={addContact}>Add</button>
        </>
    );
};
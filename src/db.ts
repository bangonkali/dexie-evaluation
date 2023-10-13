import Dexie from 'dexie';
import { IContact } from './db/models/contact-model';

export class Database extends Dexie {
    contacts!: Dexie.Table<IContact, string>;

    constructor() {
        super('MyAppDatabase');

        this.version(1).stores({
            contacts: '&id, first, last',
        });
    }
}

export const db = new Database();

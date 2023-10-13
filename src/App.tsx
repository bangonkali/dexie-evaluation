import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddContactForm } from './components/add-contact-form';
import { ContactList } from './components/contact-list';

function App() {
  return (
    <div className="App">
      <AddContactForm />
      <ContactList />
    </div>
  );
}

export default App;

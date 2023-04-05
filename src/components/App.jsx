import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from './redux/operations';
import { selectContacts } from './redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContainerApp } from './App.styled';
import { fetchContacts } from './redux/operations'
import { useEffect } from 'react';

import React from 'react';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  const onSubmitHandler = (data) => {
    const isContactExists = contacts.some(
      (contact) => contact.name === data.name
    );

    if (isContactExists) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const contact = {
      id: data.id,
      name: data.name,
      phone: data.phone,
    };
    dispatch(addContact(contact));
  };

   const onDeleteHandler = (id) => {
    dispatch(deleteContact(id));
  };

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerApp>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitHandler} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList onDeleteContact={onDeleteHandler}/>
    </ContainerApp>
  );
}
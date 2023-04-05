import { ContactsList, ContactsListItem, ContactListText, Button } from './ContactList.styled'
import { useDispatch,useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { selectContacts, selectFilter, selectDeletingId } from '../redux/selectors';
    
export default function ContactList( ) {
  const dispatch = useDispatch();
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  
  const deletingId = useSelector(selectDeletingId);


const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  console.log(filteredContacts)
  return (
    <ContactsList contact={contacts}>
      {filteredContacts.map(({name, phone, id})=> (
        <ContactsListItem key={id}>
          <ContactListText>{`${name}: ${phone}`}</ContactListText>
          <Button
            disabled={id === deletingId}
            type="button"
            onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
          
        </ContactsListItem>
      ))}         
    </ContactsList>
  )
}


    
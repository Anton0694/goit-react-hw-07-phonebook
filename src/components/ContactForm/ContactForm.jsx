import { useState } from "react"
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/operations';



import {Form, Input, Label, Button } from "./ContactForm.styled"


export default function ContactForm ()  {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

    const dispatch = useDispatch();
 
  const handleSubmit = event => {
       event.preventDefault();
        dispatch(addContact({ name, phone }));
       reset();
  }  
  
  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value)
        break;
      
      case 'phone':
        setPhone(value)
        break;
      default:
        return
    }
  };    
  
  const  reset = () => {
    setName('')
    setPhone('')
  }  
  
     
       return (
        
           <Form onSubmit={handleSubmit}>
             <Label >Name
               <Input
                 onChange={handleInputChange}
                 type="text"
                 value={name}
                 name="name"
               
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
               />
             </Label>
             <Label >Phone number
               <Input
                 onChange={handleInputChange}
                 type="tel"
                 value={phone}
                 name="phone"
                
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
               />
            
             </Label>
       
             <Button type="submit" >Add contact</Button>
           </Form>
           
         
         
       )
    }





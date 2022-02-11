import { useEffect, useState } from 'react';
import  './styles.css';
import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet",
            phone_number: "0112 116 33 44"
        },
        {
            fullname: "Ayşe",
            phone_number: "0113 113 86 55"
        },
        {
            fullname: "Seven",
            phone_number: "0114 114 66 77"
        },
        {
          fullname: "Atom",
          phone_number:"0115 115 35 33"
        },

    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);
//
    return (
        <div id="container">
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}

export default Contacts

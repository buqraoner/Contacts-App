import { useEffect, useState } from 'react';
import './styles.css';
import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Ahmet",
            phone_number: "0112 116 33 44"
        },
        {
            fullname: "Home",
            phone_number: "0114 114 66 77"
        },
        {
            fullname: "Buğra",
            phone_number: "Numara bulunamadı"
        },
        {
            fullname: "Atom",
            phone_number: "0115 115 35 33"
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

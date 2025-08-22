import { memo, useCallback, useState } from "react";

interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactProps {
    contact: Contact;
    onCall: (phone: string) => void
}

const ContactCard = memo(({contact, onCall}: ContactProps) => {
    console.log(`Renderizando contacto ${contact.name}`)

    return (
        <div>
            <h3>{contact.name}</h3>
            <p>Phone number: {contact.phone}</p>
            <button onClick={() => {onCall(`${contact.name} - ${contact.phone}`)}}>Call</button>
        </div>
    )
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        {
            id: 1, name: "Jhon", phone: "123-456-789"
        },
        {
            id: 2, name: "Martha", phone: "789-456-123"
        },
        {
            id: 3, name: "Jim", phone: "456-789-123"
        }
    ]);

    const [log, setLog] = useState<string>("")

    const makeCall = useCallback((phone: string) => setLog(`Calling to ${phone}`), [])

    const addConctact = () => {
        const newContact = {
            id: contacts.length + 1,
            name: `Contact ${contacts.length + 1}`,
            phone: `${Math.random() * 9595959595}`
        }

        setContacts([...contacts, newContact])
    }

    return (
        <div>
            <h2>Phone Book</h2>
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
            ))}
            <button onClick={addConctact}>Add contact</button>
            <p>{log}</p>
        </div>
    )
}
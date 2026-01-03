import { useState } from 'react';
import FavoriteContacts from './FavoriteContacts';
import GeneralContacts from './GeneralContacts';
import AddContact from './AddContact';
function ContactIndex() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: 'Deepak Kumar',
      phone: '565-454-4554',
      email: 'deepak@yopmail.com',
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Prity Kumari',
      phone: '565-454-4254',
      email: 'prity@yopmail.com',
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Aadhya Singh',
      phone: '565-454-4574',
      email: 'aadhya@yopmail.com',
      isFavorite: true,
    },
  ]);

  function handleToggleFavorite(contact) {
    setContactList((prevState) => {
      return prevState.map((obj) => {
        if (obj.id == contact.id) {
          return { ...obj, isFavorite: !obj.isFavorite };
        }
        return obj;
      });
    });
  }

  function handleDeleteContact(contactId) {
    setContactList((prevState) => {
      return prevState.filter((obj) => {
        return obj.id !== contactId;
      });
    });
  }

  return (
    <div className="container" style={{ minHeight: '85vh' }}>
      <div className="py-3">
        <div className="row py-2">
          <div className="col-6">ADD CONTACT</div>
          <div className="col-6">REMOVE CONTACT</div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <AddContact />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <FavoriteContacts
              favoriteClick={handleToggleFavorite}
              deleteClick={handleDeleteContact}
              contacts={contactList.filter((u) => u.isFavorite == true)}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <GeneralContacts
              favoriteClick={handleToggleFavorite}
              deleteClick={handleDeleteContact}
              contacts={contactList.filter((u) => u.isFavorite == false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactIndex;

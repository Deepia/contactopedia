import Contact from './Contact';

function FavoriteContacts(props) {
  return (
    <div
      className="col-12 p-2"
      style={{ borderRadius: '10px', backgroundColor: '#323637' }}
    >
      <div className="text-center text-white-50">Favorites</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact
            favoriteClick={props.favoriteClick}
            deleteClick={props.deleteClick}
            contact={contact}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoriteContacts;

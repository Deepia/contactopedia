import { useState } from 'react';

function AddContact(props) {
  const [messages, SetMessages] = useState({
    errorMessage: '',
    successMessage: '',
  });
  function handleAddContactForm(formData) {
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      console.log(contactData);
      const response = props.handleAddContact(contactData);
      if (response.status == 'success') {
        SetMessages({ errorMessage: undefined, successMessage: response.msg });
      } else {
        SetMessages({
          errorMessage: response.msg,
          successMessage: undefined,
        });
      }
    } catch (error) {
      console.error('Error adding contact', error);
      SetMessages({
        errorMessage: 'Error Encounterd',
        successMessage: undefined,
      });
    }
  }
  return (
    <div className="border col-12 text-white p-2">
      <form action={handleAddContactForm}>
        <div className="row p-2">
          <div className="col-12 text-white-50 text-center h5">
            Add a new Contact
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              placeholder="Name..."
              name="name"
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              placeholder="Email..."
              name="email"
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              placeholder="Phone..."
              name="phone"
              className="form-control form-control-sm"
            />
          </div>

          {messages.successMessage && (
            <div className="col-12 text-center text-success">
              {messages.successMessage}
            </div>
          )}
          {messages.errorMessage && (
            <div className="col-12 text-center text-danger">
              {messages.errorMessage}
            </div>
          )}
          <div className="col-12">
            <button className="btn btn-primary btn-sm form-control">
              Create
            </button>
          </div>
          {/* <div className="col-12">
            <button className="btn btn-danger btn-sm form-control">
              Cancel
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default AddContact;

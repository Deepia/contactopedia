function AddContact() {
  function handleAddContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };
    console.log(contactData);
  }
  return (
    <div className="border col-12 text-white p-2">
      <form onSubmit={handleAddContactForm}>
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

          <div className="col-12 text-center text-success">Success Message</div>
          <div className="col-12 text-center text-danger">Error Message</div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary btn-sm form-control"
            >
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

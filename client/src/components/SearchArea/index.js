import React from "react";

export default function Input(props) {  
  const input = React.createRef();
  function handleSubmit(event) {
    // props.
    event.preventDefault();
  }

  return (
    <div className="col-md-12">
      <h2>Book Search</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="bookToFind">Book</label>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Book name" aria-label="Book name" aria-describedby="name-of-book" ref={input}/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={() => props.setSearchValue({input})}>Search</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  );
}


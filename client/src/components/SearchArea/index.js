import React from "react";
import "./style.css";

export default function Input(props) {  
  const input = React.createRef();
  function handleSubmit(event) {
    // props.
    event.preventDefault();
  }

  return (
    <div className="col-md-12">
      <div className="search-area">
        <h2 className="p10">Book Search</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookToFind" className="p10">Book</label>
          <div className="input-group mb-3 p10">
            <input type="text" className="form-control" placeholder="Book name" aria-label="Book name" aria-describedby="name-of-book" ref={input}/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={() => props.setSearchValue({input})}>Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}


import React from "react";

export function Input(props) {  
  input = React.createRef();
  function handleSubmit(event) {
    props.
    event.preventDefault();
  }

  return (
    <div>
      <h2>Book Search</h2>
      <form onSubmit={this.handleSubmit}>
      <div class="form-group">
        <label for="bookToFind">Book</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Book name" aria-label="Book name" aria-describedby="name-of-book" ref={input}/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" onclick={() => props.setSearchValue({input})}>Search</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  );
}


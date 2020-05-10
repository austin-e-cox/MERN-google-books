import React from "react";
import API from "../../utils/API";

//props = {
//  type: delete
//  id: 12412341432
//  title
//  link
//  description
//  authors
//  image
//}

export function Book(props) {
  const btnAction = (type) => {
    if (type === "delete"){
      return <button className="btn btn-warning" onclick={() => API.deleteBook(props._id)}>Delete</button>
    }
    else if (type === "save"){
      bookData = {
        title: props.title,
        link: props.link,
        description: props.description,
        authors: props.authors,
        image: props.image
      }
      return <button className="btn btn-success" onclick={() => API.saveBook(bookData)}>Save</button>
    }
  };

  return (
    <div className="">
      <div className="row">
      <div className="col-md-10">
        <h2 className="">{props.title}</h2>
      </div>
      <div className="col-md-1">
          <button className="btn btn-info" href={props.link}>View</button>
          {btnAction()}
        </div>
      </div>
      <div className="">{props.description}</div>
      <h3 className="">{props.authors.join(", ")}</h3>
      <div className="row">
        <img className="col-md-2" href={props.image} />
        <div className="col-md-10">{props.description}</div>
      </div>
    </div>
  );
}

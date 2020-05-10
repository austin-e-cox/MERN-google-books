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

export default function Book(props) {
  console.log(props)
  props = props.data
  const btnAction = (type) => {
    if (type === "delete"){
      return <button className="btn btn-warning" onclick={() => API.deleteBook(props._id)}>Delete</button>
    }
    else if (type === "save"){
      let bookData = {
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
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-10">
            <h2 className="">{props.title}</h2>
          </div>
          <div className="col-md-1">
            <button className="btn btn-info" href={props.link}>View</button>
            {btnAction()}
          </div>
        </div>
        <div className="">{props.title}</div>
          <div className="">{props.authors.join(", ")}</div>
        <div className="row">
          <img className="col-md-2" href={props.image} />
          <div className="col-md-10">{props.description}</div>
      </div>
    </div>
    </div>
  );
}

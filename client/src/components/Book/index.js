import React from "react";
import "./style.css";
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
  const type = props.type;
  props = props.data

  // sanitize missing data
  if (!props.authors){
    props.authors = []
  }
  if (!props.imageLinks)
    props.imageLinks = {thumbnail:"https://via.placeholder.com/728x90.png"}

  const btnAction = (type) => {
    if (type === "delete"){
      return <button type="button" className="btn btn-danger" onClick={() => API.deleteBook(props.id)}>Delete</button>
    }
    else if (type === "save"){
      let bookData = {
        title: props.title,
        link: props.infoLink,
        description: props.description,
        authors: props.authors,
        image: props.imageLinks.thumbnail
      }
      return <button type="button" className="btn btn-success" onClick={() => API.saveBook(bookData)}>Save</button>
    }
  };

  return (
    <div className="row book">
      <div className="col-md-12 p10">
        <div className="row">
          <div className="col-md-9">
            <h2 className="">{props.title}</h2>
          </div>
          <div className="col-md-1">
            <a className="btn btn-info" href={props.infoLink}>View</a>
            </div>
          <div className="col-md-2">
            {btnAction(type)}
          </div>
        </div>
        <div className="">{props.title}</div>
          <div className="">{props.authors.join(", ")}</div>
        <div className="row">
          <img className="col-md-2" src={props.imageLinks.thumbnail} alt={props.title}/>
          <div className="col-md-10">{props.description}</div>
      </div>
    </div>
    </div>
  );
}

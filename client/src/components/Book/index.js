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
  console.log(props)
  const type = props.type;
  props = props.data
  const btnAction = (type) => {
    if (type === "delete"){
      return <button type="button" className="btn btn-danger" onClick={() => API.deleteBook(props.id)}>Delete</button>
    }
    else if (type === "save"){
      let bookData = {
        title: props.title,
        link: props.link,
        description: props.description,
        authors: props.authors,
        image: props.imageLinks.thumbnail
      }
      return <button type="button" className="btn btn-success" onClick={() => API.saveBook(bookData)}>Save</button>
    }
  };

  console.log(props.imageLinks.thumbnail);

  return (
    <div className="row book">
      <div className="col-md-12 p10">
        <div className="row">
          <div className="col-md-9">
            <h2 className="">{props.title}</h2>
          </div>
          <div className="col-md-1">
            <button className="btn btn-info" href={props.link}>View</button>
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

import React, { useState } from "react";
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
  const handleDelete = props.handleDelete;
  const [color, setColor] = useState((type=="delete") ? "btn-danger" : "btn-success")  
  props = props.data

  // sanitize missing data
  // if we are showing the saved page, use stored names
  //  saved page
  if (type === "delete"){
    props.imageLinks = {thumbnail: props.image};
    props.infoLink = props.link;
  }
  // search page
  else {
    if (!props.authors)
      props.authors = [];
    if (!props.imageLinks)
      props.imageLinks = {thumbnail:"https://via.placeholder.com/200x90.png"};
    if (!props.description)
      props.description = "No description given";
  }

  function recolor() {
    if (type==="save")
      setColor("btn-secondary")
  }

  const btnAction = (type) => {
    if (type === "delete"){
      return <button type="button" className={"btn "+color} 
      onClick={() => {
        return API.deleteBook(props._id).then(handleDelete())
      }
      }>Delete</button>
    }
    else if (type === "save"){
      let bookData = {
        title: props.title,
        link: props.infoLink,
        description: props.description,
        authors: props.authors,
        image: props.imageLinks.thumbnail
      }
      return <button type="button" className={"btn "+color}
        onClick={() => {
          recolor()
          API.saveBook(bookData)}
        }>Save</button>
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
        <div className="row tal">
          <div className="col-md-12">{props.title}</div>
        </div>
        <div className="row tal b10">
          <div className="col-md-12">{props.authors.join(", ")}</div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <img src={props.imageLinks.thumbnail} alt={props.title}/>
          </div>
          <div className="col-md-9 col-sm-8">{props.description}</div>
      </div>
    </div>
    </div>
  );
}

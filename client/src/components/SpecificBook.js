import React from "react";
import { graphql } from "react-apollo";
import { GetSpecificBook } from "../queries/queries";

function SpecificBook(props) {
  console.log(props.data.book);
  if (!props.data.loading)
    return (
      <div>
        <h5>Book Details</h5>
        <p>
          <label>Book Name: </label> <label>{props?.data?.book?.name}</label>
        </p>
        <p>
          <label>Book Genre: </label> <label>{props?.data?.book?.genre}</label>
        </p>
        <h5>Author Details</h5>
        <p>
          <label>Author Name: </label>{" "}
          <label>{props?.data?.book?.author?.name}</label>
        </p>
        <p>
          <label>Author Age: </label>{" "}
          <label>{props?.data?.book?.author?.age}</label>
        </p>
        <p>All Books by this author are:</p>
        <ul>
          {props?.data?.book?.author?.books.map((item, i) => (
            <li key={i}><p>{item.name}</p></li>
          ))}
        </ul>
      </div>
    );
  else
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
}

export default graphql(GetSpecificBook, {
  options: (props) => {
    return {
      variables: {
        id: props.id,
      },
    };
  },
})(SpecificBook);

import React from "react";
import { graphql } from "react-apollo";
import { GetSpecificAuthor } from "../queries/queries";

function SpecificAuthor(props) {
  console.log(props.data.author);
  if (!props.data.loading)
    return (
      <div>
        <h5>Author Details</h5>
        <p>
          <label>Author Name: </label>{" "}
          <label>{props?.data?.author?.name}</label>
        </p>
        <p>
          <label>Author Age: </label> <label>{props?.data?.author?.age}</label>
        </p>
        {props?.data?.author?.books.length ? (
          <>
            <p>All Books by {props?.data?.author?.name} are:</p>
            <ul>
              {props?.data?.author?.books.map((item, i) => (
                <li key={i}><p>{item.name}</p></li>
              ))}
            </ul>
          </>
        ) : (
          <p>No books have been written by {props?.data?.author?.name}</p>
        )}
      </div>
    );
  else
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
}

export default graphql(GetSpecificAuthor, {
  options: (props) => {
    return {
      variables: {
        id: props.id,
      },
    };
  },
})(SpecificAuthor);

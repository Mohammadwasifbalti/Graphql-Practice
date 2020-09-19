import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getBookQuery } from "../queries/queries";
import SpecificBook from "./SpecificBook";

function BookList(props) {
  const [currentBook, setcurrentBook] = useState(false);
  console.log(props);
  const data = props?.getbookquery;
  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {!data.loading ? (
          data.books.map((item, i) => (
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (currentBook === item.id) setcurrentBook(false);
                  else setcurrentBook(item.id);
                }}
              >
                {item.name}
              </div>
              {currentBook ? (
                <div
                  style={
                    currentBook === item.id
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <SpecificBook id={item.id} />
                </div>
              ) : null}
            </li>
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </ul>
    </div>
  );
}

export default compose([graphql(getBookQuery, { name: "getbookquery" })])(
  BookList
);

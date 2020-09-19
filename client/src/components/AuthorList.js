import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getAuthorQuery } from "../queries/queries";
import SpecificAuthor from "./SpecificAuthor";

function AuthorList({ data }) {
  const [currentTab, setcurrentTab] = useState(false);
  console.log(data.authors);

  return (
    <div>
      <h1>Authors List</h1>
      <ul>
        {!data.loading ? (
          data.authors.map((item, i) => (
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (currentTab === item.id) setcurrentTab(false);
                  else setcurrentTab(item.id);
                }}
              >
                {item.name}
              </div>
              {currentTab ? (
                <div
                  style={
                    currentTab === item.id
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <SpecificAuthor id={currentTab} />
                </div>
              ) : null}
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default graphql(getAuthorQuery)(AuthorList);

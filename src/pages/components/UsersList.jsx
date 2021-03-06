import { List, CellMeasurer } from "react-virtualized";
import { FILTER_HEIGHT } from "./Filter";
import { HEADER_HEIGHT } from "./Header";

import { NoUserMessage } from "./NoUserMessage";

import * as Styled from "./StyledComponents";

export const UsersList = ({ users, cache }) => {
  // eslint-disable-next-line no-restricted-globals
  //get height of the element Header

  return users.length === 0 ? (
    <NoUserMessage />
  ) : (
    <List
      height={window.innerHeight - HEADER_HEIGHT - FILTER_HEIGHT - 40}
      rowCount={users.length}
      itemData={users}
      rowHeight={cache.current.rowHeight}
      deferredMeasurementCache={cache.current}
      width={window.innerWidth}
      rowRenderer={({ key, index, style, parent }) => {
        const user = users[index];

        const initialLetters = user.name.substring(0, 2).toUpperCase();

        return (
          <CellMeasurer
            key={key}
            cache={cache.current}
            parent={parent}
            columnIndex={0}
            rowIndex={index}
          >
            <Styled.CellContainer style={style}>
              <div
                className="cell"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: "316px",
                  margin: "auto",
                }}
              >
                <div
                  className="avatar"
                  letters={initialLetters}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #2F4858",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>{initialLetters}</p>
                </div>
                <div
                  className="col name"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 50px 0 10px",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>Name</p>
                  <p style={{ margin: "0.5rem 0 0 0" }}>{user.name}</p>
                </div>
                <div
                  className="col age"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "0.8rem" }}>Age</p>
                  <p style={{ margin: "0.5rem 0 0 0" }}>{user.age}</p>
                </div>
              </div>
            </Styled.CellContainer>
          </CellMeasurer>
        );
      }}
    />
  );
};

import { List, CellMeasurer } from "react-virtualized";

import { NoUserMessage } from "./NoUserMessage";

import * as Styled from "./StyledComponents";

export const UsersList = ({ users, cache }) => {
  // eslint-disable-next-line no-restricted-globals
  //get height of the element Header
  const headerHeight =
    document.getElementsByClassName("header-container")[0].clientHeight;
  const filterHeight =
    document.getElementsByClassName("filter-container")[0].clientHeight;

  return users.length === 0 ? (
    <NoUserMessage />
  ) : (
    <List
      height={window.innerHeight - headerHeight - filterHeight - 80}
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
                  <p>{user.name}</p>
                </div>
                <div
                  className="col age"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p style={{ margin: 0 }}>Age</p>
                  <p style={{ marginBottom: 0 }}>{user.age}</p>
                </div>
              </div>
            </Styled.CellContainer>
          </CellMeasurer>
        );
      }}
    />
  );
};

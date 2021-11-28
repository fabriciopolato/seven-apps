import { List, CellMeasurer } from "react-virtualized";

import * as Styled from "./StyledComponents";

export const UsersList = ({ users, cache }) => {
  return (
    <List
      // eslint-disable-next-line no-restricted-globals
      height={screen.height - 200}
      rowCount={users.length}
      itemData={users}
      rowHeight={cache.current.rowHeight}
      deferredMeasurementCache={cache.current}
      width={365}
      rowRenderer={({ key, index, style, parent }) => {
        const user = users[index];

        const evenOrOdd = index % 2 === 0 ? "even" : "odd";
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
                className={`cell ${evenOrOdd}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: "295px",
                }}
              >
                <div
                  className="avatar"
                  letters={initialLetters}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #2F4858",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    backgroundColor: "#fafafa",
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
                  <p style={{ margin: 0 }}>Idade</p>
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

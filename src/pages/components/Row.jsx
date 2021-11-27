export const Row = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <span>Nome</span>
        <p>{data.name}</p>
      </div>
      <div>
        <span>Idade</span>
        <p>{data.age}</p>
      </div>
    </>
  );
};

export default Row;

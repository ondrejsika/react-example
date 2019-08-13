export default () => {
  let fruits = ["orange", "apple", "banana"];
  return (
    <>
      <ul>
        {(() => {
          return fruits.map((el, i) => {
            return <li key={i}>{el}</li>;
          });
        })()}
      </ul>
    </>
  );
};

export default () => {
  let count = 2;
  return (
    <>
      {(() => {
        let out = [];
        if (count >= 1) {
          out.push(<h1>H1</h1>);
        }
        if (count >= 2) {
          out.push(<h2>H2</h2>);
        }
        if (count >= 3) {
          out.push(<h3>H3</h3>);
        }
        return out;
      })()}
    </>
  );
};

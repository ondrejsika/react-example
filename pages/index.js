import Hello from "../components/Hello";

import nela_img from "../data/nela.jpg";

function Home() {
  return (
    <>
      <Hello name="Zuz" />
      <img src={require("../data/nela.jpg")} />
      <img src={nela_img} />
    </>
  );
}

export default Home;

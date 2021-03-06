import Hello from "../components/Hello";

import nela_img from "../data/nela.jpg";
import json_file from "../data/example.json";
import yaml_file from "../data/example.yaml";

function Home() {
  let name = "Zuz";
  return (
    <>
      {(() => {
        if (name) {
          return <Hello name={name} />;
        } else {
          return <h1>Hello unknown</h1>;
        }
      })()}
      <img src={require("../data/nela.jpg")} />
      <img src={nela_img} />
      <h2>JSON Data</h2>
      <ul>
        {json_file.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
      <h2>YAML Data</h2>
      <ul>
        {yaml_file.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </>
  );
}

export default Home;

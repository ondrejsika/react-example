import { Box } from "@primer/components";
import Hello from '../components/Hello'

import nela_img from "../data/nela.jpg";

function Home() {
  return <>
    <Box width={[1/2]}>
      <Hello name="Zuz" />
      <img src={require('../data/nela.jpg')} />
      <img src={nela_img} />
    </Box>
  </>;
}

export default Home;

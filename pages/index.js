import { Box } from "@primer/components";
import Hello from '../components/Hello'

function Home() {
  return <>
    <Box width={[1/2]}>
      <Hello name="Zuz" />
    </Box>
  </>;
}

export default Home;

import { Box, BaseStyles } from "@primer/components";
import Hello from '../components/Hello'

function Home() {
  return <>
    <BaseStyles>
      <Box width={[1/2]}>
        <Hello name="Zuz" />
      </Box>
    </BaseStyles>
  </>;
}

export default Home;

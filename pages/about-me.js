import { Box, BaseStyles } from "@primer/components";
import Hello from '../components/Hello'

export default () => {
  return <>
    <BaseStyles>
      <Box width={[1/2]}>
        <h1>About me</h1>
      </Box>
    </BaseStyles>
  </>;
}

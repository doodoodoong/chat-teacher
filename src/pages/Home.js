import { Box } from '@chakra-ui/react';
import VideoBackground from '../components/VideoBackground';
import VideoOverlay from '../components/VideoOverlay';
import Header from '../components/Header';
import Main from '../components/Main';
import Test from '../components/Test';

function Home() {
  return (
    <>
      <VideoBackground videoSrc={'/assets/study.mp4'} />
      <VideoOverlay />
      <Box zIndex={1}>
        <Header />
        <Main />
        <Test />
      </Box>
    </>
  );
}

export default Home;

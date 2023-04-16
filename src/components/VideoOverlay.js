import { Box } from '@chakra-ui/react';

function VideoOverlay() {
  return (
    <Box
      position={'fixed'}
      width={'100%'}
      height={'100%'}
      bg={'black'}
      opacity={0.6}
      zIndex={-1}
    />
  );
}

export default VideoOverlay;

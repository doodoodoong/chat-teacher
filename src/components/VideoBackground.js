import { Box } from '@chakra-ui/react';

function VideoBackground({ videoSrc }) {
  return (
    <Box
      as="video"
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      position={'fixed'}
      width={'100%'}
      height={'100%'}
      objectFit={'cover'}
      zIndex={-1}
    />
  );
}

export default VideoBackground;

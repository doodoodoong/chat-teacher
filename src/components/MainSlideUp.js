import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, VStack, Text } from '@chakra-ui/react';

function MainSlideUp() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };
  return (
    <VStack w={'100%'} position={'relative'}>
      <Box w={'100%'}>
        <Slider {...settings}>
          <Box>
            <Text
              fontSize={'8xl'}
              color={'#b578ff'}
              fontFamily={'azo-sans-web, sans-serif'}
              fontWeight={'extrabold'}
            >
              Math
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={'8xl'}
              color={'#b578ff'}
              fontFamily={'azo-sans-web, sans-serif'}
              fontWeight={'extrabold'}
            >
              Society
            </Text>
          </Box>
        </Slider>
      </Box>
    </VStack>
  );
}

export default MainSlideUp;

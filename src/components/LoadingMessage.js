import { TypeAnimation } from 'react-type-animation';

function LoadingMessage() {
  <TypeAnimation
    sequence={[
      '문제를 읽는중...',
      1000,
      '조건을 살펴보는중...',
      1000,
      '답을 구하는 중...',
      1000,
      '검산하는 중...',
      1000,
    ]}
    wrapper={'div'}
    speed={50}
    repeat={Infinity}
    cursor={true}
    style={{
      whiteSpace: 'pre-line',
      fontSize: '1rem',
      display: 'inline-block',
      fontFamily: 'NeoDunggeunmoPro-Regular',
      color: 'white',
    }}
  />;
}

export default LoadingMessage;

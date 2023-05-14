import { TypeAnimation } from 'react-type-animation';

function Response({ response }) {
  return (
    <TypeAnimation
      sequence={[`${response}`, 4000]}
      cursor={true}
      style={{
        fontSize: '3em',
        fontFamily: 'NeoDunggeunmoPro-Regular',
        color: 'white',
      }}
    />
  );
}

export default Response;

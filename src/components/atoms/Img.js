import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.img`
  display: flex;
  margin: 0 auto;
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
  position: ${(props) => props.isLoaded ? 'static' : 'initial'};
  visibility: ${(props) => props.src ? 'initial' : 'hidden'};
`;

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  isLoaded: PropTypes.bool,
};

Img.defaultProps = {
  width: '',
  height: '',
  isLoaded: false,
};

export default Img;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme/index';
import Img from '../atoms/Img';
import Text from '../atoms/Text';
import image from '../../assets/images/svg/CardOverallRusult.svg';

const StyledOverallResult = styled(({ color, component, ...props }) =>
  React.createElement(component, props)
)`
  position: relative;
`;

const OverallResult = () => {
  return (
    <StyledOverallResult>
      <Text absolute color="greyDarker">99%</Text>
      <Img width="50%" height="50%" src={image} alt="card's overall result" />
    </StyledOverallResult>
  );
};

StyledOverallResult.propTypes = {
  component: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(theme.color)),
};

StyledOverallResult.defaultProps = {
  component: 'div',
};

export default OverallResult;

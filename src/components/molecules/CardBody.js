import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import View from '../atoms/View';
import { device } from '../theme/Breakpoints';
import theme from '../theme';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    return '';
  },
};

const CardBody = styled(
  ({
    borderStyle,
    borderColor,
    backgroundColor,
    shape,
    elevated,
    ...props
  }) => <View {...props} />
)`
  border-width: 0.0625rem;
  border-style: ${(props) => props.borderStyle};
  border-radius: ${styles.borderRadius};
  border-color: ${(props) =>
    props.borderColor
      ? props.theme.color[props.borderColor]
      : props.theme.color[props.backgroundColor]};
  background-color: ${(props) => props.theme.color[props.backgroundColor]};
  box-shadow: ${(props) =>
    props.elevated ? '0 0.375rem 1rem 0 rgba(0, 0, 0, 0.16)' : ''};

  @media ${device.mobileL} {
    padding: 0.5rem 0 2rem;
  }
`;

CardBody.propTypes = {
  borderStyle: PropTypes.string,
  borderColor: PropTypes.oneOf(Object.keys(theme.color)),
  backgroundColor: PropTypes.oneOf(Object.keys(theme.color)),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged']),
  elevated: PropTypes.bool,
};

CardBody.defaultProps = {
  borderStyle: 'solid',
  backgroundColor: 'white',
  shape: 'bluntEdged',
};

export default CardBody;

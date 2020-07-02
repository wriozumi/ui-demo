import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../theme/Breakpoints';
import theme from '../theme/index';

const Text = styled(
  ({
    component,
    color,
    size,
    weight,
    family,
    absolute,
    align,
    truncate,
    children,
    ...props
  }) => React.createElement(component, props, children)
)`
  color: ${(props) => (props.color ? props.theme.color[props.color] : '')};
  font-size: ${(props) =>
    props.size ? props.theme.fontSize[props.size] : '8vw'};
  font-weight: ${(props) =>
    props.weight ? props.theme.fontWeight[props.weight] : ''};
  font-family: ${(props) =>
    props.family ? props.theme.fontFamily[props.family] : ''};
  line-height: ${(props) => (props.component === 'p' ? '1.5' : '')};
  text-align: ${(props) => props.align || ''};
  overflow: ${(props) => (props.truncate ? 'hidden' : '')};
  white-space: ${(props) => (props.truncate ? 'nowrap' : '')};
  text-overflow: ${(props) => (props.truncate ? 'ellipsis' : '')};
  position: ${(props) => (props.absolute ? 'absolute' : '')};
  left: ${(props) => (props.absolute ? '50%' : '')};
  top: ${(props) => (props.absolute ? '50%' : '')};
  transform: ${(props) => (props.absolute ? 'translate(-50%, -50%)' : '')};
  padding: 0;
  margin: 0;

  @media ${device.mobileL} {
    font-size: ${(props) =>
      props.size ? props.theme.fontSize[props.size] : '42px'};
  }

  ${(props) =>
    props.size === 'l' &&
    `@media ${device.mobileL} {
      font-size: ${theme.fontSize.xl};
    }
  `}

  ${(props) =>
    props.size === 'xs' &&
    `@media ${device.mobileL} {
      font-size: ${theme.fontSize.s};
    }
  `}
`;

Text.propTypes = {
  component: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(theme.color)),
  size: PropTypes.oneOf(Object.keys(theme.fontSize)),
  weight: PropTypes.oneOf(Object.keys(theme.fontWeight)),
  family: PropTypes.oneOf(Object.keys(theme.fontFamily)),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  truncate: PropTypes.bool,
};

Text.defaultProps = {
  component: 'div',
};

export default Text;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme/index';

const ListBullet = styled(
  ({
    color,
    component,
    ...props
  }) => React.createElement(component, props),
)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.theme.color[props.color] : '')};
`;

ListBullet.propTypes = {
  component: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(theme.color)),
};

ListBullet.defaultProps = {
  component: 'span',
};

export default ListBullet;
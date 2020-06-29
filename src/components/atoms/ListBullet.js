import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const ListBullet = styled(
  ({
    color,
    component
  }) => React.createElement(component, color),
)`
  color: ${(props) => props.color ? props.theme.color[props.color] : ''};
  padding: 0;
  margin: 0;
  border-radius: 50%;
`;

ListBullet.propTypes = {
  component: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(theme.color)),
};

ListBullet.defaultProps = {
  component: 'div',
};

export default ListBullet;
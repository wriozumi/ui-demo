import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const StyledListContent = styled(
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

const ListContent = () => {
  return (
    <StyledListContent />
  )
}

StyledListContent.propTypes = {
  component: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(theme.color)),
};

StyledListContent.defaultProps = {
  component: 'div',
};

export default ListContent;
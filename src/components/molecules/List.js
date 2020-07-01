import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const styles = {
  listStyleType(props) {
    if (props.type === 'unordered') {
      return 'disc';
    }
    if (props.type === 'ordered') {
      return 'decimal';
    }
    return 'none';
  },
};

const List = styled(({ type, ...props }) =>
  React.createElement(props.type === 'ordered' ? 'ol' : 'ul', props)
)`
  list-style-type: ${styles.listStyleType};
  list-style-position: ${(props) => (props.type ? 'outside' : '')};
`;

List.propTypes = {
  type: PropTypes.oneOf(['ordered', 'unordered']),
};

List.Item = ListItem;

export default List;

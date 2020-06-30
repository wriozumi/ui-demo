import React from 'react';
import PropTypes from 'prop-types';
import Container from '../atoms/Container';
import List from '../molecules/List';
import ListItem from '../molecules/ListItem';
import OverallResult from '../molecules/OverallRusult';
import theme from '../theme';

const Card = (props) => {
  return (
    <Container>
      <OverallResult />
      <List type="unordered">
        <ListItem value="423" percent="33" color="yellow">
          Av. Lesson Rating
        </ListItem>
        <ListItem value="44" percent="63" color="red">
          Missed Standards
        </ListItem>
        <ListItem value="28" percent="100" color="green">
          Quiz fails
        </ListItem>
        <ListItem value="22" percent="13" color="yellow">
          Successful Standards
        </ListItem>
      </List>
    </Container>
  );
};

Card.propTypes = {};

export default Card;

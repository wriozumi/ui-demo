import React from 'react'
import PropTypes from 'prop-types'
import Container from '../atoms/Container';
import List from '../molecules/List';
import ListItem from '../molecules/ListItem';
import theme from '../theme';

const Card = props => {
  return (
    <Container>
      <List type='unordered'>
        <ListItem/>
        <ListItem/>
      </List>
    </Container>
  )
}

Card.propTypes = {

}

export default Card

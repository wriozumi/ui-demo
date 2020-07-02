import React from 'react';
import PropTypes from 'prop-types';
import Container from '../atoms/Container';
import List from '../molecules/List';
import ListItem from '../molecules/ListItem';
import OverallResult from '../molecules/OverallRusult';
import Tabs from '../molecules/Tabs';
import Space from '../atoms/Space';
import CardHeader from '../molecules/CardHeader';
import CardBody from '../atoms/CardBody';

const Card = () => {
  return (
    <Container>
      <CardHeader backgroundColor="blueDark" shape="bluntEdged" />
      <CardBody backgroundColor="white" shape="bluntEdged">
        <Space padding={[4, 4]}>
          <Tabs>
            <Tabs.Tab title="Overall">
              <OverallResult />
              <Space padding={[4, 0, 0]} margin={[4, 0, 0]}>
                <List type="unordered">
                  <ListItem value="43" percent="33" color="yellow">
                    Av. Lesson Rating
                  </ListItem>
                  <ListItem value="44" percent="63" color="red">
                    Missed Standards
                  </ListItem>
                  <ListItem value="28" percent="99" color="green">
                    Quiz fails
                  </ListItem>
                  <ListItem value="22" percent="13" color="yellow">
                    Successful Standards
                  </ListItem>
                </List>
              </Space>
            </Tabs.Tab>
            <Tabs.Tab title="This week">Content for Two</Tabs.Tab>
          </Tabs>
        </Space>
      </CardBody>
    </Container>
  );
};

Card.propTypes = {};

export default Card;

import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Text from '../atoms/Text';
import Space from '../atoms/Space';
import ListBullet from '../atoms/ListBullet';

const StyledListItem = styled.li`
  color: ${(props) => (props.color ? props.theme.color[props.color] : '')};
  width: 100%;
  height: 20px;
  color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 768px;
  font-family: 'Inter';
  margin-bottom: 21px;
  font-weight: 550;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StatisticsNameWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StatisticsName = styled.span`
  font-size: 12px;
  margin: 0 25px 0 10px;
`;
const StatisticsNumberWrap = styled.div`
  display: flex;
`;

const ListItem = ({ children, value, percent, color }) => {
  return (
    <StyledListItem>
      <StatisticsNameWrap>
        <ListBullet classNames="fff" color={color}></ListBullet>
        <StatisticsName>
          <Text className="list-item" color="greyDarker" size="xs">
            {children}
          </Text>
        </StatisticsName>
      </StatisticsNameWrap>
      <StatisticsNumberWrap>
        <Text color="greyDarker" size="xs">
          {value}
        </Text>
        <Space margin={[0, 0, 0, 1]}>
          <Text color="grey" size="xs">
            ({percent}%)
          </Text>
        </Space>
      </StatisticsNumberWrap>
    </StyledListItem>
  );
};

StyledListItem.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

StyledListItem.defaultProps = {
  disabled: false,
};

export default ListItem;

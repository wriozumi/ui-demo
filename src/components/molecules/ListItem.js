import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme/index';
import React from 'react';
import Text from '../atoms/Text';
import ListBullet from '../atoms/ListBullet';

const StyledListItem = styled.li`
  cursor: ${(props) => (props.onClick ? 'pointer' : '')};
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};
  opacity: ${(props) => (props.disabled ? '0.5' : '')};
  &:hover,
  &:focus {
    background: ${(props) =>
      props.onClick ? props.theme.color.translucent : ''};
  }
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

const Bullet = styled.span`
  width: 6px;
  height: 6px;
  color: red;
  border-radius: 50%;
  background: #a69aec;
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
const StatisticsPercent = styled.span`
  margin-left: 5px;
  color: #a6acbe;
`;

const ListItem = ({ children, value, percent, color }, props) => {
  return (
    <StyledListItem>
      <StatisticsNameWrap>
        <ListBullet classNames="fff" color={color}></ListBullet>
        <StatisticsName>
          <Text color="greyDarker" size="s">
            {children}
          </Text>
        </StatisticsName>
      </StatisticsNameWrap>
      <StatisticsNumberWrap>
        <Text color="greyDarker" size="s">
          {value}
        </Text>
        <StatisticsPercent>({percent}%)</StatisticsPercent>
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


import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import React from 'react';
import ListBullet from '../atoms/ListBullet';
import GlobalStyle from '../theme/GlobalStyle';

const StyledListItem = styled.li`
  cursor: ${(props) => props.onClick ? 'pointer' : ''};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  opacity: ${(props) => props.disabled ? '0.5' : ''};
  &:hover,
  &:focus {
    background: ${(props) => props.onClick ? props.theme.color.translucent : ''};
  }
  color: ${(props) => props.color ? props.theme.color[props.color] : ''};
  width: 100%;
  height: 20px;
  color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 768px;
  font-family: 'Inter Regular';
`;

const Bullet = styled.span`
  width: 6px;
  height: 6px;
  color: red;
  border-radius: 50%;
  background: #A69AEC;
`
const StatisticsNameWrap = styled.div`
  display: flex;
  align-items: center;
`

const StatisticsName = styled.span`
  font-size: 12px;
  margin: 0 10px 0 25px;
`
const StatisticsNumberWrap = styled.div`
  display: flex;
`
const StatisticsPercent = styled.span`
  margin-left: 5px;
  color: #A6ACBE;
`

const ListItem = () => {
  return (
    <StyledListItem>
      <StatisticsNameWrap>
        <Bullet />
        <StatisticsName>Av. Lesson Rating</StatisticsName>
      </StatisticsNameWrap>
      <StatisticsNumberWrap>
        20 <StatisticsPercent>(32%)</StatisticsPercent>
      </StatisticsNumberWrap>
    </StyledListItem>
  )
}

StyledListItem.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

StyledListItem.defaultProps = {
  disabled: false,
};

export default ListItem;
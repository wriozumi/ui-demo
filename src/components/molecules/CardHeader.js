import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import View from '../atoms/View';
import theme from '../theme';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';
import Space from '../atoms/Space';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    return '';
  },
};

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-width: 1px;
  border-style: ${(props) => props.borderStyle};
  border-radius: ${styles.borderRadius};
  border-color: ${(props) =>
    props.borderColor
      ? props.theme.color[props.borderColor]
      : props.theme.color[props.backgroundColor]};
  background-color: ${(props) => props.theme.color[props.backgroundColor]};
  box-shadow: ${(props) =>
    props.elevated ? '0 6px 16px 0 rgba(0, 0, 0, 0.16)' : ''};
  padding-bottom: 45px;
  position: relative;
  bottom: -30px;
  z-index: -1;
`;

const CategoryCountItem = styled.div`
  border-right: 1px solid #a69aec;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 33%;

  &:last-child {
    border-right: none;
  }

  div {
    &:last-child {
      margin-top: 10px;
    }
  }
`;

const CardHeader = ({ backgroundColor, shape }) => {
  return (
    <Space padding={[3, 3, 9]}>
      <StyledCardHeader backgroundColor={backgroundColor} shape={shape}>
        <CategoryCountItem>
          <Text weight="semibold" color="white" size="xl">
            47
          </Text>
          <Text color="white" size="s">
            Lessons
          </Text>
        </CategoryCountItem>
        <CategoryCountItem>
          <Text weight="semibold" color="white" size="xl">
            12
          </Text>
          <Text color="white" size="s">
            Classes
          </Text>
        </CategoryCountItem>
        <CategoryCountItem>
          <Text weight="semibold" color="white" size="xl">
            1028
          </Text>
          <Text color="white" size="s">
            Students
          </Text>
        </CategoryCountItem>
      </StyledCardHeader>
    </Space>
  );
};

CardHeader.propTypes = {
  borderStyle: PropTypes.string,
  borderColor: PropTypes.oneOf(Object.keys(theme.color)),
  backgroundColor: PropTypes.oneOf(Object.keys(theme.color)),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged']),
  elevated: PropTypes.bool,
};

CardHeader.defaultProps = {
  borderStyle: 'solid',
  backgroundColor: 'white',
  shape: 'bluntEdged',
};

export default CardHeader;

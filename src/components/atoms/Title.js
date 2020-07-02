import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  flex: 0;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${(props) =>
    props.size ? props.theme.fontSize[props.size] : '8vw'};
  padding: ${(props) => props.theme.px([1, 3])};
  color: ${(props) =>
    props.isSelected ? props.theme.color.white : props.theme.color.grey};
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.color.blueLighter
      : props.theme.color.transparent};
  font-weight: ${(props) =>
    props.isSelected ? props.theme.fontWeight.medium : ''};
  border-radius: ${(props) =>
    props.isSelected ? props.theme.borderRadius : ''};
  border-color: ${(props) =>
    props.isSelected
      ? props.theme.color.primary
      : props.theme.color.transparent};
`;

export default Title;

import styled from 'styled-components';
import { device } from '../theme/Breakpoints';

const Container = styled.div`
  max-width: 425px;
  min-width: 260px;
  margin: 0 auto;
  padding: 2rem 3rem;

  @media ${device.mobileL} {
    max-width: 425px;
  }
`;

export default Container;

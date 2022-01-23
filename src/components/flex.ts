import styled from 'styled-components';

interface IFlexProps {
  direction?: string;
  width?: string;
  justifyContent?: string;
}

const Flex = styled.div<IFlexProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  flex-wrap: wrap;
`;

export default Flex;

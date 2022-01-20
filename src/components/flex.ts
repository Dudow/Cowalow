import styled from 'styled-components';

interface IFlexProps {
  direction?: string;
  width?: string;
  justifyContent?: string;
}

const Flex = styled.div<IFlexProps>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
`;

export default Flex;

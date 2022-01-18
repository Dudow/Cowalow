import styled from 'styled-components';

interface IFlexProps {
  direction?: string;
}

const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

export default Flex;

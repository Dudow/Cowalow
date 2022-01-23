import styled from 'styled-components';

interface IImageProps {
  width?: string;
  margin?: string;
}

const Image = styled.img<IImageProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

export default Image;

import styled from 'styled-components';

const Button = styled.button`
  background: rgba(148, 160, 212, 0.2);
  border: 2px solid #8c8fd0;
  border-radius: 4px;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: 0.2s;
  min-width: 200px;
  flex: 1;

  &:hover {
    background: rgba(148, 160, 212, 0.3);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 20px 30px 4px;
  }
`;

export default Button;

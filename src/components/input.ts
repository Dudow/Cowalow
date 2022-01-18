import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: 3px solid #8c8fd0;
  border-radius: 3px;
  color: #fdfdfd;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
  transition: 0.2s;
  outline: 0;

  &:focus {
    background: rgba(148, 160, 212, 0.2);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 20px 30px 4px;
  }
`;

export default Input;

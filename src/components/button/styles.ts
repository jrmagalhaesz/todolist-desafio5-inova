import styled from 'styled-components';


const IconButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  margin-right:auto;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: #3700b3;
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 8px;
  }
`;

export default IconButton;

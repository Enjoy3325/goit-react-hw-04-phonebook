import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
`;

export const ButtonCard = styled.button`
  margin-left: 20px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: #ae000d;
  color: white;
  border-radius: 40px;
  border-color: none;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);

  cursor: pointer;
  :hover,
  :focus {
    background-color: #191616;
  }
`;

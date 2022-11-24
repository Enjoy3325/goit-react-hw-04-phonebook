import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`;

export const InputFilter = styled.input`
  font-size: 20px;
  font-weight: 700;
  width: 220px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 40px;
  border-color: none;
  justify-content: center;
  :hover,
  :focus {
    border-color: #ff6200;
  }
`;
export const TextFilter = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
`;

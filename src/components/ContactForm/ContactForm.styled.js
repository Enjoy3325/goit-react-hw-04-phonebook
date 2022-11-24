import styled from 'styled-components';
export const SectionForm = styled.section`
  margin: 20px;
`;
export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  font-size: 20px;
  font-weight: 700;
  width: 220px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 40px;
  border-color: none;

  :hover,
  :focus {
    border-color: #ff6200;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const TextForm = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
`;
export const ButtonForm = styled.button`
  margin-left: 20px;
  width: 220px;
  height: 60px;
  font-size: 18px;
  align-items: center;
  font-weight: 700;
  background-color: #123c23;
  color: white;
  border-radius: 40px;
  border-color: none;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);

  cursor: pointer;
  :hover,
  :focus {
    background-color: #ff6200;
  }
`;

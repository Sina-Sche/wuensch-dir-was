import styled from 'styled-components/macro';

const Container = styled.div`
  justify-self: center;
  margin-top: 45px;
`;
const InputField = styled.input``;
const AddButton = styled.button`
  background: royalblue;
  border: none;
`;

const Input = () => {
  return (
    <Container>
      <InputField type="text" placeholder="Type a name" />
      <AddButton type="submit">+</AddButton>
    </Container>
  );
};
export default Input;

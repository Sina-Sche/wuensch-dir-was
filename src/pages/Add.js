import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Input from '../components/Input';

const Container = styled.div`
  display: flex;
`;

const Heading = styled.h1`
  color: white;
  text-align: center;
  margin: 30px;
`;
const BackButton = styled.button`
  border: none;
  font-size: 1rem;
  line-height: 1;
  background: white;
  cursor: pointer;
  margin: 30px;
  box-shadow: 0 5px 40px white;
`;

export default function App() {
  return (
    <Container>
      <Link to="/">
        <BackButton type="submit">Back</BackButton>
      </Link>
      <Heading>Add a new Wishlist</Heading>
      <Input />
    </Container>
  );
}

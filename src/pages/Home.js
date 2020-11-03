import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Button from '../components/Button';
import WishListItem from '../components/WishListItem';

const List = styled.ul`
  list-style: none;
`;
const Heading = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Heading>My Wishlists</Heading>
      <List>
        <WishListItem title="Sina" />

        <WishListItem title="Leon" />

        <WishListItem title="Philipp" />
      </List>
      <Link to="/add">
        <Button>+</Button>
      </Link>
    </>
  );
}

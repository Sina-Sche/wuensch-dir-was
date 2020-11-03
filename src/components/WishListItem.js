import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px royalblue;
`;

export default function WishListItem({ title }) {
  return (
    <>
      <li>
        <Container>{title}</Container>
      </li>
    </>
  );
}
WishListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

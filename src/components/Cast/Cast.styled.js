import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  padding: 20px;
  transition: 0.3s;
  flex-basis: 1200px;
  flex-wrap: wrap;

  &:hover {
  }
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  width: 25%;
`;

export const Image = styled.img`
  width: 400px;
  margin: 2px;
  overflow: hidden;
  display: block;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

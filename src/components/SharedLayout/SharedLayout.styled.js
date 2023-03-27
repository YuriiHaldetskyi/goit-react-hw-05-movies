import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  letter-spacing: 1em;
  background: url(https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg)
    no-repeat center center / cover;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 200px;
  text-aligh: center;
`;
export const StyledLink = styled(NavLink)`
  color: rgb(0, 153, 255);

  :hover,
  :focus,
  &.active {
    color: yellow;
    letter-spacing: 15px;
    transform: scale(1.5);
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

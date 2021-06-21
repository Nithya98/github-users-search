import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  const isUser = isAuthenticated && user

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin })
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: #c9ffbf; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffafbd,
    #c9ffbf
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffafbd,
    #c9ffbf
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  text-align: center;
  display: flex;
  flex-direction: row;
  grid-template-columns: auto auto 100px;
  justify-content: space-around;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.3);
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 45px !important;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.2);
  }
  button {
    background: transparent;
    border: solid 1px #120e43;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(
      90deg,
      rgba(12, 59, 10, 0.301) 0%,
      rgb(9, 9, 99) 100%
    );
    padding: 10px;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(9, 9, 99, 0.301) 100%,
        rgb(12, 59, 10) 0%
      );
      color: #000;
    }
  }
`

export default Navbar

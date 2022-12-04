import styled from "styled-components/macro";
import logo from "../img/logospot.png";

const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLoginButton = styled.a`
  display: inline-block;
  background-color: var(--green);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;

const ImageLogin = styled.img`
  max-width: 150px;
  padding-bottom: 1rem;
`;

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://web-production-b4af.up.railway.app/login";

const Login = () => (
  <StyledLoginContainer>
    <ImageLogin src={logo} />
    <StyledLoginButton href={LOGIN_URI}>Log in to Spotify</StyledLoginButton>
  </StyledLoginContainer>
);

export default Login;

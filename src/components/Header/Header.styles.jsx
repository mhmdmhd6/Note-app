import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  min-width: 250px;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  margin-bottom: 30px;
  font-size: 18px;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.text};
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SearchInput = styled.input`
  font-size: 20px;
  padding: 0.7rem;
  border-radius: 0.6rem;
  border: 1px solid ${(props) => props.theme.primary};
  color: var(--color-black);
  outline: none;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 18px;
  background-color: ${(props) => props.theme.primary};
  border: none;
  outline: none;
  border-radius: 0.3rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

import { HeaderWrapper, Logo, SearchContainer, SearchInput, Button } from './Header.styles.jsx';

export default function Header({toggleTheme, theme}) {
  return (
    <HeaderWrapper >
      <Logo>Note app</Logo>
      <SearchContainer>
        <SearchInput type="text" placeholder="search..." />
      </SearchContainer>
      <Button onClick={toggleTheme}>{theme === 'light' ? 'dark' : 'light'}</Button>
    </HeaderWrapper>
  );
}

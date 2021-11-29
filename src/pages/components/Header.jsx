import sevenAppsLogo from "../../assets/sevenapps-logo.jpg";

import * as Styled from "./StyledComponents";

export const HEADER_HEIGHT = 92;

export const Header = () => {
  return (
    <Styled.HeaderContainer height={HEADER_HEIGHT}>
      <Styled.HeaderLogo src={sevenAppsLogo} alt="Seven App Logo" />
      <Styled.TextHeader>SevenApps</Styled.TextHeader>
    </Styled.HeaderContainer>
  );
};

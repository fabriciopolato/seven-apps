import sevenAppsLogo from "../../assets/sevenapps-logo.jpg";

import * as Styled from "./StyledComponents";

export const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLogo src={sevenAppsLogo} alt="Seven App Logo" />
      <Styled.TextHeader>SevenApps</Styled.TextHeader>
    </Styled.HeaderContainer>
  );
};

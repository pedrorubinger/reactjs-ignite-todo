import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  LogoImg,
} from "./styles"

import RocketLogo from "../../assets/rocket-logo.svg"
import { LogoText } from "../LogoText"

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <LogoImg src={RocketLogo} alt="" />
          <LogoText />
        </LogoContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}

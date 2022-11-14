import { HeaderContainer } from "./HeaderContainer";
import { HeaderTitle } from "./HeaderTitle";
import { Refrigerator } from "./images/Refrigerator";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>WASTELESS</HeaderTitle>
      <Refrigerator width={"8rem"} height={"8rem"} fill={"white"} />
    </HeaderContainer>
  );
};

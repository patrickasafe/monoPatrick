import { HeaderContainer } from "./HeaderContainer";
import { HeaderTitle } from "./HeaderTitle";
import { Refrigerator } from "./images/Refrigerator";

interface Props {
  title: string
  icon: JSX.Element
}

export const Header = ({title, icon}: Props) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      {icon}
    </HeaderContainer>
  );
};

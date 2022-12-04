import { HeaderContainer } from "./HeaderContainer";
import { HeaderTitle } from "./HeaderTitle";

interface HeaderProps {
  title: string;
  icon: JSX.Element;
}

export const Header = ({ title, icon }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      {icon}
    </HeaderContainer>
  );
};

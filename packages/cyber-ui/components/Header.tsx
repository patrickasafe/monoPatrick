import { HeaderContainer } from "./containers/HeaderContainer";
import { HeaderTitle } from "./HeaderTitle";

interface Props {
  title: string;
  icon: JSX.Element;
}

export const Header = ({ title, icon }: Props) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      {icon}
    </HeaderContainer>
  );
};

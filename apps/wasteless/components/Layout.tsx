import { Header, LayoutContainer, Refrigerator } from "cyber-ui";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header
        title={"WASTELESS"}
        icon={Refrigerator({ width: "8rem", height: "8rem", fill: "white" })}
      />
      <span style={{ fontSize: "24px", margin: "1.5rem" }}>
        Evite desperdícios, adicione aqui produtos para controle de validade.{" "}
      </span>
    </LayoutContainer>
  );
};

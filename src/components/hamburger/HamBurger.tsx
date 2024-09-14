import { ReactElement } from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { Button } from "../button";

type HamBurgerProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: string;
  className?: string;
};

const HamBurger = ({
  handleClick,
  icon,
  className,
}: HamBurgerProps): ReactElement => {
  return (
    <Button onClick={handleClick} className={className}>
      {icon === "menu" ? <Menu /> : <Close />}
    </Button>
  );
};

export { HamBurger };

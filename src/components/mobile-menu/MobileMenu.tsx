import { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import { docsConfig } from "../../config/docs";
import { HamBurger } from "../hamburger";

const MobileMenu = (): ReactElement => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const handleClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <HamBurger handleClick={handleClick} icon={"menu"} />
      {showMobileMenu && (
        <div className="container absolute left-0 top-0 flex h-dvh flex-col bg-slate-950 p-4">
          <div>
            <HamBurger
              handleClick={handleClick}
              icon={"close"}
              className={"float-right"}
            />
          </div>

          <nav className="flex flex-col">
            {docsConfig.mainNav.map((item) => (
              <NavLink
                to={`${item.href}`}
                key={item.title}
                className={"p-4"}
                onClick={handleClick}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export { MobileMenu };

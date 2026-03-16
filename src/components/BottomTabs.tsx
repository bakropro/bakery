import { NavLink } from "react-router-dom";
import { t, type Lang } from "../i18n";

type Props = {
  lang: Lang;
};

export function BottomTabs({ lang }: Props) {
  return (
    <div className="bottom-tabs">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          "bottom-tab" + (isActive ? " active" : "")
        }
      >
        <span className="tab-icon">🍰</span>
        <span className="tab-text">{t(lang, "menu")}</span>
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          "bottom-tab" + (isActive ? " active" : "")
        }
      >
        <span className="tab-icon">🛒</span>
        <span className="tab-text">{t(lang, "cart")}</span>
      </NavLink>
    </div>
  );
}
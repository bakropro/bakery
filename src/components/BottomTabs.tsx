import { NavLink } from "react-router-dom";

export function BottomTabs() {
  return (
    <div className="bottom-tabs">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          "bottom-tab" + (isActive ? " active" : "")
        }
      >
        🍰
        <span>Меню</span>
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          "bottom-tab" + (isActive ? " active" : "")
        }
      >
        🛒
        <span>Корзина</span>
      </NavLink>
    </div>
  );
}

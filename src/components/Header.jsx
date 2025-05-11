import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Language from '/src/context/language'
export default function Header() {
  const cart = useSelector((state) =>
    (state.cart.cartItems || []).reduce(
      (sum, product) => sum + product.quantity,
      0
    )
  );
  const { lang, setLang } = useContext(Language);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary px-3 mb-3">
        <NavLink className="navbar-brand" to="/">
          Ecommerce App
        </NavLink>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="ms-1">{cart}</span>
            </NavLink>
          </li>

          <li>
            <select
              value={lang}
              onChange={handleLangChange}
              className="form-select w-auto"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </li>
        </ul>
      </nav>
    </>
  );
}

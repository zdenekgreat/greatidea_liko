import React from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";
import shop_banner from '@/assets/img/menu/shop-menu/banner-1.jpg';
import port_img from '@/assets/img/menu/portfolio-menu/portfolio.png';

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu) => (
            <li
              key={menu.id}
              className={`has-dropdown ${menu.home_menus || menu.portfolio_mega_menus ? "has-homemenu" : ""} ${menu.home_menus ? "dropdown-opened" : ""}`}
            >
              {menu.title === "Kontakt" ? (
                <Link href={menu.link}>{menu.title}</Link>
              ) : (
                <>
                  <a className="pointer" onClick={() => openMobileMenu(menu.title)}>
                    {menu.title}
                    <button className="dropdown-toggle-btn">
                      <i className="fa-light fa-plus"></i>
                    </button>
                  </a>
                  {menu.home_menus ? (
                    <div className="tp-submenu submenu tp-mega-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                      {/* ...existing code... */}
                    </div>
                  ) : menu.pages_mega_menu ? (
                    <div className="tp-submenu submenu tp-mega-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                      {/* ...existing code... */}
                    </div>
                  ) : menu.portfolio_mega_menus ? (
                    <div className="tp-submenu submenu tp-mega-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                      {/* ...existing code... */}
                    </div>
                  ) : menu.dropdown_menus ? (
                    <ul className="tp-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                      {/* ...existing code... */}
                    </ul>
                  ) : null}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

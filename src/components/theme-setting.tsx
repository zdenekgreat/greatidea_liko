'use client';
import React from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ThemeSetting = () => {
  const { setTheme, theme } = useTheme();
  // Jednoduchý přepínač s ikonou slunce/měsíc
  return (
    <button
      aria-label="Přepnout světlý/tmavý režim"
      className="theme-switcher-btn bg-transparent border-0 p-0 d-flex align-items-center"
      style={{ fontSize: 24, cursor: 'pointer' }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <i className="fa-regular fa-sun" title="Světlý režim"></i>
      ) : (
        <i className="fa-regular fa-moon" title="Tmavý režim"></i>
      )}
    </button>
  );
};

export default dynamic(() => Promise.resolve(ThemeSetting), {
  ssr: false
})

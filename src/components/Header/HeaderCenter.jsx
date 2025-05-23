import React from "react";
import { useTranslation } from "react-i18next";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import { useLocation } from 'react-router-dom';

export default function HeaderCenter() {
  const location = useLocation();
  const { t } = useTranslation();

  if (location.pathname === '/school') {
    return (
      <div>
        {/* Header center */}
        <ul className="flex items-center">
          <a href="/">
            <li>{t("header.links1")}</li>
          </a>
          <a href="#about">
            <li>{t("header.links8")}</li>
          </a>
          <a href="#teachers">
            <li>{t("header.links9")}</li>
          </a>
          <a href="#courses">
            <li>{t("header.links10")}</li>
          </a>
          <a href="#help">
            <li>{t("header.links6")}</li>
          </a>
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        {/* Header center */}
        <ul className="flex items-center">
          <a href="#team">
            <li>{t("header.links2")}</li>
          </a>
          <a href="#services">
            <li>{t("header.links3")}</li>
          </a>
          <a href="school">
            <li>{t("header.links7")}</li>
          </a>
          <a href="#questions">
            <li>{t("header.links6")}</li>
          </a>
          <a href="#contacts">
            <li>{t("header.links5")}</li>
          </a>
        </ul>
      </div>
    )
  }
}

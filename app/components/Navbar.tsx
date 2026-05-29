"use client";

import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="main-navbar">

      {/* GLASS OVERLAY */}
      <div className="navbar-overlay"></div>

      {/* LOGO */}
      <div className="nav-logo">
        <img
          src="/logo.png"
          alt="Authentic Infosystem"
        />
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">
        <a href="#">Laptops</a>
        <a href="#">Desktops</a>
        <a href="#">Networking</a>
        <a href="#">Accessories</a>
        <a href="#">Enterprise</a>
        <a href="#">Contact</a>
      </div>

  {/* SEARCH ICON */}

<div
  className="nav-search"
  onClick={() => {

    const query =
      prompt("Search Section");

    if (!query) return;

    const q =
      query.toLowerCase();

    if (q.includes("home")) {

      window.location.href = "#home";

    }

    else if (
      q.includes("about")
    ) {

      window.location.href = "#about";

    }

    else if (
      q.includes("solution") ||
      q.includes("service")
    ) {

      window.location.href = "#solutions";

    }

    else if (
      q.includes("brand")
    ) {

      window.location.href = "#brands";

    }

    else if (
      q.includes("why")
    ) {

      window.location.href = "#why-us";

    }

    else if (
      q.includes("contact")
    ) {

      window.location.href = "#contact";

    }

    else {

      alert("Section not found");

    }

  }}
>

  <FaSearch />

</div>
    </nav>
  );
}
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header">
          {/* Heading */}
          iTunes & Apple Books Search
        </div>
        <div className="favourite-btn">
          {/* 'Favourites' button to take you to the page that displays your list of favourite */}
          <Link to="/favourites">
            <Button variant="danger" className="btn">
              Favourites
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

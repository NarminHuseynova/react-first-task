import { useState } from "react";
import BoxLogo from "./img/full-moon.png";


export const LogoDropdown = ({ label }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleClick}>
        {label ?? "Label"}
      </button>
      {isVisible && <div className="dropdown-content">
          <div><img className="dropdown-content-img" src={BoxLogo} alt="boxlogo" /></div>
          </div>}
    </div>
  );
};
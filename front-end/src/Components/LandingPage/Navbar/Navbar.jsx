import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import bus from "../images/bus.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.right}>
        <div>
          <img
            src={bus}
            alt="busbooker logo"
            height="60px"
          />
        </div>
        <div className={styles.navLink}>
          <Link to="/bus-tickets" className={styles.removeunderline}>
            <p className={styles.white}>Bus Tickets</p>
          </Link>
          <Link to="/rpool" className={styles.removeunderline}>
            <p className={styles.white}>rPool</p>
          </Link>
          <Link to="/bus-hire" className={styles.removeunderline}>
            <p className={styles.white}>BUS HIRE</p>
          </Link>
        </div>
      </div>
      <div className={styles.left}>
        <p className={styles.white}>Manage Booking</p>
        <p className={styles.white}>Help</p>
      </div>
    </div>
  );
};

export default Navbar;

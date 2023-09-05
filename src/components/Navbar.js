import { FaAngleLeft, FaMicrophone } from 'react-icons/fa6';
import { BsFillGearFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { GiTwoCoins } from 'react-icons/gi';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <header className={styles.navbar}>
    <nav className={styles.links}>
      <div className={styles.brand}>
        <NavLink to="/"><FaAngleLeft className={styles.icon} /></NavLink>
        <p>
          <GiTwoCoins className={styles.logo} />
          Coin Watch
        </p>
      </div>
      <div className={styles.icons}>
        <FaMicrophone className={styles.icon} />
        <BsFillGearFill className={styles.icon} />
      </div>
    </nav>
  </header>
);

export default Navbar;

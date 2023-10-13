import styles from './sidebar.module.scss'
import icon1 from '/assets/icon-1.png?url';
import icon2 from '/assets/icon-2.png?url';
import icon3 from '/assets/icon-3.png?url';
import icon4 from '/assets/icon-4.png?url';

const Sidebar = () => {
  return (
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>

          <div className={styles.btns}>
            <button className={styles.btn}>
              <img src={icon1} alt="logo" />
            </button>
            <button className={styles.btn}>
              <img src={icon2} alt="logo" />
            </button>
            <button className={styles.btn}>
              <img src={icon3} alt="logo" />
            </button>
            <button className={styles.btn}>
              <img src={icon4} alt="logo" />
            </button>
          </div>

          <div className={styles.copyright}>
            <p>Copiryght, SportSee 2020</p>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;

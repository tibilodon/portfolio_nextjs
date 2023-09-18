import Modal from "../modal/Modal";
import styles from "./navbar.module.css";
import Sidebar from "../sidebar/Sidebar";
import Link from "next/link";

type NavbarProps = {
  sidebar: boolean;
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ sidebar }) => {
  return (
    <>
      <div className={styles.wrap}>
        {/* <div className={styles.sidebar}>
        </div> */}

        {/* <Sidebar sidebar={sidebar} /> */}
        <Modal />
        <Link href="/contact" as="/contact">
          <span>Contact</span>
        </Link>
        <span>Option</span>
        <span>Option</span>
      </div>
    </>
  );
};

export default Navbar;

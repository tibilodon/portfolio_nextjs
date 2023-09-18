"use client";
import { useState, useCallback } from "react";
import styles from "./sidebar.module.css";

// const Sidebar: React.FunctionComponent = () => {
//   const [show, setShow] = useState(false);
//   const sidebarHandler = (): void => setShow(!show);
//   return (
//     <>
//       {/* <!-- Trigger/Open The Modal -->*/}
//       <button onClick={() => setShow(!show)}>Open Sidebar</button>

//       {/*
// <!-- The Modal -->*/}
//       <div
//         onClick={() => setShow(!show)}
//         className={!show ? styles.modal : styles.open}
//       >
//         {/*  <!-- Modal content -->*/}
//         <div className={styles.modalContent}>
//           <p>Please add sidebar items..</p>
//           {/* <span onClick={() => setShow(!show)} className={styles.close}>
//             x close
//           </span> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

type SidebarProps = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  sidebar,
  setSidebar,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handler = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar, setSidebar]);

  return (
    <>
      <div className={styles.wrap}>
        <button onClick={handler}>open sidebar</button>

        {sidebar ? (
          <>
            {" "}
            <h1>sidar item</h1>
            <h1>sidar item</h1>
            <h1>sidar item</h1>
            <h1>sidar item</h1>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Sidebar;

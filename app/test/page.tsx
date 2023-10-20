import styles from "./page.module.css";
import Modal from "@/components/modal/Modal";
import WorkContentWrapper from "@/components/workContentWrapper/WorkContentWrapper";
export default function Test() {
  return (
    <>
      <div className={styles.wrap}>
        <WorkContentWrapper>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero error
            fuga quo, perspiciatis voluptas in sunt deleniti, cum molestiae
            ullam vitae voluptate illum, unde nemo tempora. Aliquid eius quia
            minima tenetur commodi, fugiat, maxime voluptates nesciunt iste
            reiciendis a omnis ratione aspernatur sunt accusantium quidem in
            itaque praesentium, numquam exercitationem!
          </h3>
          <h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias eum
            ex perspiciatis incidunt nobis totam esse nemo tempore provident
            dolorum officiis consequatur iste accusamus cumque dolores quia
            nulla, reprehenderit dignissimos, soluta libero cum maxime odio
            temporibus iusto? Reiciendis, voluptas impedit.
          </h4>
        </WorkContentWrapper>
      </div>
    </>
  );
}

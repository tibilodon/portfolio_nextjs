import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Project",
  description: "Project page",
};

export default function Project(params: any) {
  return (
    <>
      <div className={styles.wrap}>
        <h1>project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          sapiente sit vel excepturi quam repudiandae vitae, dolorum, beatae,
          cum voluptate aliquam! Id, voluptatibus maxime. Veritatis eligendi
          alias pariatur iste ad odit laudantium veniam atque quod facere,
          labore, ducimus, magnam illum fugit nobis nisi nam aspernatur soluta
          sapiente. Officiis delectus nostrum beatae culpa inventore neque
          asperiores, voluptate in rerum necessitatibus ex esse, unde dolorem
          sapiente ut voluptatem. Laudantium iste quibusdam ad, labore nostrum
          veniam repellat modi? Ducimus molestias illo blanditiis voluptate
          quibusdam dolore natus officia veritatis minus esse, placeat, quidem
          eos cum ipsa itaque, officiis est. Quaerat non tempore numquam ut.
        </p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa
          distinctio fuga provident? Iusto, nulla quos necessitatibus
          consequatur facere dolores ipsam. Ut perferendis magnam laboriosam
          quam, facilis debitis! Debitis repudiandae reprehenderit eligendi
          recusandae possimus impedit nemo commodi, incidunt aperiam asperiores
          est nam dignissimos laudantium at exercitationem quos in culpa eaque
          modi aliquam. Iusto quas sed natus labore repellat fugiat error non
          obcaecati delectus facilis tenetur aliquid adipisci numquam,
          repellendus, voluptates eius consequatur nesciunt incidunt vero quod,
          sequi tempore? Quaerat accusantium molestiae commodi. Commodi unde
          temporibus, ratione sapiente, veritatis libero perferendis
          exercitationem, impedit dolore similique deleniti mollitia. Impedit
          ipsum quis delectus?
        </span>
      </div>
    </>
  );
}

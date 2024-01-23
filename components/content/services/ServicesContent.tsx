import styles from "./servicesContent.module.css";
import Image from "next/image";
import Link from "next/link";
import RegularButton from "@/components/buttons/regular/RegularButton";
import Check from "@/public/icons/check.svg";

type Props = {
  title: string;
  hero: string;
  description: string;
  includes: string[];
  buttonLabel: string;
  alt_hero: string;
  alt_description: string;
};

const ServicesContent: React.FunctionComponent<Props> = ({
  title,
  hero,
  description,
  includes,
  buttonLabel,
  alt_hero,
  alt_description,
}) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.hero}>
          <h3>{title}</h3>
          <h4>{hero}</h4>
          <p>{description}</p>
        </div>
        <div className={styles.alt}>
          <span>
            {includes.map((item, index) => {
              return (
                <div className={styles.mappedWrap} key={index}>
                  <Image src={Check} alt="checkmark" />
                  <span>{item}</span>
                </div>
              );
            })}
          </span>
          <Link className={styles.claim} href={"/contact"}>
            <RegularButton label={buttonLabel} />
          </Link>
        </div>
        <div className={styles.last}>
          <h4>{alt_hero}</h4>
          <p>{alt_description}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesContent;

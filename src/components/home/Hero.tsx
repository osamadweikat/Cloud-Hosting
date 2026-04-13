import { TiTick } from "react-icons/ti";
import Image from "next/image";
import CloudImage from "../../../public/cloud-hosting.png";
import module from "./hero.module.css";

const Hero = () => {
  return (
    <div className={module.hero}>
      <div className={module.heroLeft}>
        <h1 className={module.title}>Cloud Hosting</h1>
        <p className={module.desc}>
          The best web hosting solution for your online success
        </p>
        <div className={module.services}>
          <div className={module.serviceItem}>
            <TiTick /> Easy To Use Control Panel
          </div>
          <div className={module.serviceItem}>
            <TiTick /> Secure Hosting
          </div>
          <div className={module.serviceItem}>
            <TiTick /> Website Maintenance
          </div>
        </div>
      </div>
      <div>
        <Image src={CloudImage} alt="Cloud" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;

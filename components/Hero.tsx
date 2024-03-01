import Image from "next/image";
import { heroData } from "@/data";

const Hero = () => {
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="section-container flex-between">
      <div className="flex flex-col gap-6 lg:gap-12">
        <h1 className="xl:max-w-2xl">{title}</h1>
        <p className="lead xl:max-w-md">{subtitle}</p>
        <button className="btn btn-primary lg:max-w-[170px]">Learn more</button>
      </div>
      <div className="mt-15">
        <Image src={image} alt="hero" width={885} height={468} />
      </div>
    </section>
  );
};

export default Hero;

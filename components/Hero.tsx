import Image from "next/image";
import { heroData } from "@/data";

const Hero = () => {
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className="section-container padding-container flex flex-col relative">
      <div className="flex flex-col items-center text-center gap-6 lg:gap-12 lg:text-left lg:items-start mb-12">
        <h1 className="xl:max-w-2xl" data-aos="fade-down" data-aos-delay="400">
          {title}
        </h1>
        <p
          className="lead xl:max-w-sm"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          {subtitle}
        </p>
        <button
          className="btn btn-primary w-full lg:max-w-[170px]"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          Learn more
        </button>
      </div>
      <div
        className="xl:absolute xl:right-2 xl:bottom-2"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <Image src={image} alt="hero" width={750} height={350} />
      </div>
    </section>
  );
};

export default Hero;

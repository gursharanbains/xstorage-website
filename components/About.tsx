import { aboutData } from "@/data";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="section-container flex-center lg:px-8 xl:px-12"
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <div className="lg:rounded-3xl bg-pink-100 p-6 py-10 xl:p-10 xl:pr-12">
        <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:gap-10 lg:text-left">
          <Image
            src={aboutData.image}
            className="w-[300px] lg:w-[450px]"
            data-aos="zoom-in"
            alt="about"
            width={350}
            height={450}
          />
          <div className="flex flex-col gap-6 lg:px-12">
            <h2 data-aos="fade-up" data-aos-delay="300">
              {aboutData.title}
            </h2>
            <p data-aos="fade-up" data-aos-delay="300">
              {aboutData.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { featuresData } from "@/data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  return (
    <section className="section-container padding-container">
      <div className="flex flex-col items-center gap-8 lg:gap-1">
        <div className="flex flex-col items-center gap-8 text-center mb-12">
          <h2 data-aos="fade-down" data-aos-delay="100">{featuresData.title}</h2>
          <p className="lead max-w-lg" data-aos="fade-down" data-aos-delay="200">{featuresData.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:mt-10">
          {featuresData.list.map((f, i) => (
            <Feature key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface IFeatureProps {
  image: StaticImageData;
  bgImage: StaticImageData;
  title: string;
  description: string;
  linkText: string;
  delay: string;
}

const Feature = ({
  image,
  bgImage,
  title,
  description,
  linkText,
  delay,
}: IFeatureProps) => {
  return (
    <div className="w-full max-w-[530px] lg:h-[358px] flex items-center" data-aos="zoom-in" data-aos-delay={delay} data-aos-offset="100">
      <div className="relative flex flex-col items-center justify-center lg:flex-row lg:justify-start mx-auto">
        <Image
          src={bgImage}
          alt="background"
          height={400}
          width={400}
          className="hidden xl:flex -z-10 absolute left-16"
        />
        <Image
          src={image}
          alt="feature image"
          width={200}
          height={200}
          className="max-w-[120px] lg:mr-7 lg:max-w-[200px]"
          data-aos="zoom-in-right"
          data-aos-delay={delay}
        />
        <div className="flex flex-col gap-4 text-center lg:text-left lg:max-w-[40%]">
          <h3>{title}</h3>
          <p className="font-light text-sm lg:mb-6">{description}</p>
          <div className="flex gap-4 justify-center items-center cursor-pointer group lg:justify-start">
            <Link href="#" className="text-primary font-bold">{linkText}</Link>
            <BsArrowRight className="text-lg text-accent-primary_hover group-hover:ml-[5px] transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

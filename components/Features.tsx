import { featuresData } from "@/data";
import Image, { StaticImageData } from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  return (
    <section className="section-container padding-container">
      <div className="flex flex-col items-center gap-8 lg:gap-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2>{featuresData.title}</h2>
          <p className="lead max-w-lg">{featuresData.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 max-w-3xl lg:mt-10">
          {featuresData.list.map((f, i) => (
            <Feature {...f} />
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
    <div className="max-w-[530px]">
      <div className="relative">
        <Image
          src={image}
          alt="feature image"
          width={200}
          height={170}
          className="absolute top-[25%] left-[-10%]"
        />
        <Image
          src={bgImage}
          alt="background"
          height={450}
          width={350}
          className="hidden xl:flex -z-10 absolute top-0 left-0"
        />
        <div className="flex-col items-gap-6 h-[300px]">
          <h3>{title}</h3>
          <p className="font-light">{description}</p>
          <div className="flex gap-4 items-center cursor-pointer group">
            <p className="">{linkText}</p>
            <BsArrowRight className="text-lg text-accent-primary_hover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

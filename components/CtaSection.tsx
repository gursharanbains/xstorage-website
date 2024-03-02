import { ctaData } from "@/data";
import ArrowButton from "./common/ArrowButton";

const CtaSection = () => {
  return (
    <section
      className="section-container padding-container lg:px-8 xl:px-12"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex lg:basis-3/5 flex-col gap-6 items-center lg:items-start mb-6">
          <h2 className="text-primary" data-aos="fade-up" data-aos-delay="300">
            {ctaData.title}
          </h2>
          <p className="text-sm" data-aos="fade-up" data-aos-delay="300">
            {ctaData.subtitle}
          </p>
        </div>
        <div className="flex lg:basis-2/5 lg:items-start flex-col items-center gap-4 lg:flex-row max-w-md">
          <button
            className="w-full lg:basis-1/2 btn btn-secondary whitespace-nowrap"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {ctaData.btnText1}
          </button>
          <div className="lg:basis-1/2" data-aos="fade-up" data-aos-delay="400">
            <ArrowButton text={ctaData.btnText2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

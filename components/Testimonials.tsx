import TestimonialSlider from "./common/TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="section-container padding-container relative px-8 xl:px-12">
      <div
        className="bg-accent-primary lg:p-10 rounded-5xl"
        data-aos="fade-up"
        data-aos-offset="300"
      >
        <div className="flex flex-col justify-center px-2 lg:px-12 lg:mt-12">
          <h2 className="font-[500] text-white text-center mb-20 mt-12 lg:text-left">
            Testimonials
          </h2>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

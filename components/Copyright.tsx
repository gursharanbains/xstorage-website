import { copyrightData } from "@/data";
import Link from "next/link";

const Copyright = () => {
  return (
    <section className="section-container">
      <div className="flex flex-col items-center gap-8 justify-between lg:flex-row lg:items-start">
        <p className="text-xs font-light max-w-64 text-center lg:text-left">
          {copyrightData.text}
        </p>
        <Link
          href="/"
          className="icon w-12 h-12 bg-accent-primary_hover/10 text-accent-primary_hover hover:bg-accent-primary_hover hover:text-white"
        >
          {copyrightData.icon}
        </Link>
      </div>
    </section>
  );
};

export default Copyright;

"use server";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data";
import type { IconType } from "@/data";

const Footer = () => {
  return (
    <section className="section-container">
      <div className="flex flex-col text-center justify-between lg:text-left lg:max-w-full lg:flex-row gap-10">
        <div className="flex basis-1/5 flex-col items-center lg:items-start">
          <div className="flex items-center gap-4">
            <Image src="/img/logo.png" alt="logo" width={50} height={35} />
            <h3 className="font-bold">xStorage</h3>
          </div>
          <div className="flex flex-col text-primary items-center lg:items-start mt-4">
            <p className="font-bold mb-4 mt-8 w-[75%] md:w-full">
              {footerData.address}
            </p>
            <p className="font-light">{footerData.email}</p>
            <p className="font-light">{footerData.phone}</p>
          </div>
        </div>

        <FooterColumn title="About" list={footerData.list1} />
        <FooterColumn title="Help" list={footerData.list2} />
        <Socials list={footerData.socialList} />
      </div>
    </section>
  );
};

interface IFooterColumnProps {
  title: string;
  list: {
    href: string;
    name: string;
  }[];
}
const FooterColumn = ({ list, title }: IFooterColumnProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-4 mt-2 text-primary">
      <p className="font-bold mb-2">{title}</p>
      {list.map((item, i) => (
        <Link className="font-light text-sm" href={item.href} key={i}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

interface ISocialList {
  list: {
    icon: IconType;
    href: string;
  }[];
}

const Socials = ({ list }: ISocialList) => {
  return (
    <div className="flex flex-col gap-4 mt-2 text-primary">
      <p className="font-bold mb-2">Socials</p>
      <ul className="flex justify-center gap-4">
        {footerData.socialList.map((social, i) => (
          <li
            key={i}
            className="icon bg-primary/10 w-12 h-12 hover:bg-accent-secondary group"
          >
            <Link className="group-hover:text-white" href={social.href}>
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

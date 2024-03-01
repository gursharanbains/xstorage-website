import { navigationData } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="section-container flex-between">
      <div className="flex gap-20">
        <Image src="/img/logo.png" alt="logo" width={50} height={35} />
        <ul className="flex-between gap-12">
          {navigationData.map((nd) => (
            <Link className="" href={nd.href}>
              {nd.name}
            </Link>
          ))}
        </ul>
      </div>
      <button className="btn btn-quaternary">Request Demo</button>
    </nav>
  );
};

export default Navbar;

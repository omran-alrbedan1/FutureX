import { Suspense } from "react";

import Loader from "@/components/Loader";
import { Partners, Section, Services, Hero, Works } from "@/components/home";
import Clients from "@/components/home/Clients";

const Page = async () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="relative duration-500  dark:bg-[#0B192C]">
        <Hero />
        <Services />
        <Works />
        <Clients />
      </div>
    </Suspense>
  );
};

export default Page;

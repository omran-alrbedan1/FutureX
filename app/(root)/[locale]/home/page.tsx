import { Suspense } from "react";

import Loader from "@/components/Loader";
import {
  Partners,
  Section,
  Services,
  Hero,
  Works,
  FrequentlyAskedQuestions,
  Testimonials,
} from "@/components/home";
import Clients from "@/components/home/Clients";

const Page = async () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="relative duration-500 ">
        <Hero />
        <Services />
        <Works />
        <FrequentlyAskedQuestions />
        <Testimonials />
        <Clients />
      </div>
    </Suspense>
  );
};

export default Page;

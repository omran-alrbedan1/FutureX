import { Suspense } from "react";

import Loader from "@/components/Loader";
import {
  Services,
  Hero,
  Works,
  FrequentlyAskedQuestions,
  Testimonials
} from "@/components/home";
import Clients from "@/components/home/Clients";

const Page = async () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="relative  ">
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

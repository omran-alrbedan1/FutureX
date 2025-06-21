import { Suspense } from "react";

import Loader from "@/components/Loader";
import { Partners, Services } from "@/components/home";

const Page = async () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="relative duration-500"></div>
    </Suspense>
  );
};

export default Page;

import DumbClassCard from "@/components/DumbClassCard";
import { NextPage } from "next";
import React, { Suspense } from "react";
import { getClasses, getSlowEndpoint } from "@/services/classService";
import DumbClassCardWithSelfLoading from "@/components/DumbClassCardWithSelfLoading";

const Page: NextPage = async () => {
  await getSlowEndpoint(2000);

  const classes = await getClasses();
  return (
    <main className="min-h-screen flex flex-col p-6 gap-6 w-full">
      <DumbClassCard code="CSC-301" credits={3} name="Software Engineering" />
      {classes.map((c, index) => (
        <Suspense
          key={c.code}
          fallback={<div>Loading unica classe {c.code}...</div>}
        >
          <DumbClassCardWithSelfLoading
            code={c.code}
            time={(index + 1) * 1000}
          />
        </Suspense>
      ))}
    </main>
  );
};

export default Page;

import DumbClassCard from "@/components/DumbClassCard";
import { NextPage } from "next";
import React from "react";
import { getClasses, getSlowEndpoint } from "@/services/classService";

const Page: NextPage = async () => {
  // Slow Requests
  await getSlowEndpoint(1000);
  await getSlowEndpoint(4000);
  await getSlowEndpoint(2000);

  const classes = await getClasses();
  return (
    <main className="min-h-screen flex flex-col p-6 gap-6">
      <DumbClassCard code="doesNotExist" credits={3} name="Software Engineering" />
      {classes.map((c) => (
        <DumbClassCard
          key={c.code}
          code={c.code}
          credits={c.credits}
          name={c.name}
        />
      ))}
    </main>
  );
};

export default Page;

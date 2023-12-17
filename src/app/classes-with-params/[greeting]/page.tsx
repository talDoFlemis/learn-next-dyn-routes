import DumbClassCard from "@/components/DumbClassCard";
import React from "react";
import { getClasses } from "@/services/classService";

type PageParams = {
  params: {
    greeting: string;
  };
};

const Page = async ({ params }: PageParams) => {
  const greeting = `Hellow ${params.greeting}`;

  const classes = await getClasses();
  return (
    <main className="min-h-screen flex flex-col p-6 gap-6">
      <h1 className="text-4xl font-bold">
        Dynamic Page: {greeting}
      </h1>
      <DumbClassCard code="CSC-301" credits={3} name="Software Engineering" />
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

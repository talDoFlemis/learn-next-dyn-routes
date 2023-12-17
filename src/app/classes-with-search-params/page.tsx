import DumbClassCard from "@/components/DumbClassCard";
import React from "react";
import { getClasses, getSlowEndpoint } from "@/services/classService";

type PageParams = {
  searchParams: {
    time?: number;
    greeting?: string;
  };
};

const Page = async ({ searchParams }: PageParams) => {
  const time = searchParams.time ?? 100;
  const greeting = searchParams.greeting ?? "Hellow Jonathan Galindo!";
  // Slow Requests
  await Promise.all([
    getSlowEndpoint(time),
    getSlowEndpoint(time * 2),
    getSlowEndpoint(time),
  ]);

  const classes = await getClasses();
  return (
    <main className="min-h-screen flex flex-col p-6 gap-6">
      <h1 className="text-4xl font-bold">{greeting}</h1>
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

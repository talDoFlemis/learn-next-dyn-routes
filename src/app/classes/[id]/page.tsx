import React from "react";
import { getClassThatMaybeDoesNotExist, getClasses } from "@/services/classService";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const classes = await getClasses();

  return classes.map((c) => ({
    id: c.code,
  }));
}

const Page = async ({ params }: { params: { id: string } }) => {
  const c = await getClassThatMaybeDoesNotExist(params.id);
  if (!c) {
    notFound();
  }
  return (
    <main className="bg-white text-black h-screen">
      <h1 className="text-4xl font-bold">{c.name}</h1>
      <p>{c.code}</p>
      <p>{c.credits}</p>
    </main>
  );
};

export default Page;

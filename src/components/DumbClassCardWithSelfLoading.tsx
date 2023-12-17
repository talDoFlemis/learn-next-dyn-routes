import React from "react";
import Link from "next/link";
import { getClassById } from "@/services/classService";

type DumbClassCardWithSelfLoadingProps = {
  code: string;
  time: number;
};

const DumbClassCardWithSelfLoading = async ({
  code,
  time,
}: DumbClassCardWithSelfLoadingProps) => {
  const dumbClass = await getClassById(code, time);
  return (
    <Link
      href={`/classes/${code}`}
      className="bg-white rounded-md flex flex-col h-32 text-black justify-center items-center group"
    >
      <h3 className="text-2xl font-bold group-hover:text-red-500 transition-all">
        {dumbClass.name}
      </h3>
      <span className="text-lg">{dumbClass.credits} credits</span>
    </Link>
  );
};

export default DumbClassCardWithSelfLoading;

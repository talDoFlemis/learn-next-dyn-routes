import { ClassResponse } from "@/services/classService";
import React from "react";
import Link from "next/link";

type DumbClassCardProps = Pick<ClassResponse, "code" | "credits" | "name">;

const DumbClassCard = ({ code, credits, name }: DumbClassCardProps) => {
  return (
    <Link
      href={`/classes/${code}`}
      className="bg-white rounded-md flex flex-col h-32 text-black justify-center items-center group"
    >
      <h3 className="text-2xl font-bold group-hover:text-red-500 transition-all">
        {name}
      </h3>
      <span className="text-lg">{credits} credits</span>
    </Link>
  );
};

export default DumbClassCard;

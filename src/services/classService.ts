import { createApiProvider } from "@/providers/leitaoProvider";
import { unstable_noStore } from "next/cache";

export type ClassResponse = {
  code: string;
  credits: number;
  hours: number;
  name: string;
  prerequisites: string[];
  semester: number;
  syllabus: string;
};

const getClasses = async (): Promise<ClassResponse[]> => {
  const provider = createApiProvider();
  try {
    const res = await provider.get<ClassResponse[]>("/api/classes");
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getClassById = async (id: string, slow: number = 0): Promise<ClassResponse> => {
  const provider = createApiProvider();
  await getSlowEndpoint(slow);
  try {
    const res = await provider.get<ClassResponse>(`/api/classes/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getClassPreReqs = async (id: string): Promise<ClassResponse[]> => {
  const provider = createApiProvider();
  try {
    const res = await provider.get<ClassResponse[]>(
      `/api/classes/${id}/prerequisites`,
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getClassWithError = async (_: string): Promise<ClassResponse> => {
  throw new Error("This is an error");
};

const getSlowEndpoint = async (millis: number): Promise<void> => {
  //unstable_noStore();
  await new Promise((r) => setTimeout(r, millis));
};

export {
  getClasses,
  getClassById,
  getClassPreReqs,
  getClassWithError,
  getSlowEndpoint,
};

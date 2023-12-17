import { createApiProvider } from "@/providers/leitaoProvider";

export interface ClassResponse {
  code: string;
  credits: number;
  hours: number;
  name: string;
  prerequisites: string[];
  semester: number;
  syllabus: string;
}

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

const getClassById = async (id: string): Promise<ClassResponse> => {
  const provider = createApiProvider();
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

export { getClasses, getClassById, getClassPreReqs, getClassWithError };

import { httpWithoutCredentials } from "./http";

export const createBackgroundColor = async (colorData: { color: string }) => {
  try {
    const response = await httpWithoutCredentials.post(
      "/backgroundcolor/createBackgroundColor",
      colorData
    );
    return response.data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

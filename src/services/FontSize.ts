import { httpWithoutCredentials } from "./http";

export const createFontSize = async (FontSizeData: { size: string }) => {
  try {
    const response = await httpWithoutCredentials.post(
      "/fontSize/setFontSize",
      FontSizeData
    );
    return response.data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

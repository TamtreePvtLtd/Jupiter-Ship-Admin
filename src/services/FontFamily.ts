import { httpWithoutCredentials } from "./http";

export const createFontFamily = async (FontFamilyData: {
  fontFamily: string;
}) => {
  try {
    const response = await httpWithoutCredentials.post(
      "/fontfamily/setFontConfig",
      FontFamilyData
    );
    return response.data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

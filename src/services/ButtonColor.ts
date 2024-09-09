import { httpWithoutCredentials } from "./http";

export const createButtonColor = async (ButtonColorData: { color: string }) => {
  try {
    const response = await httpWithoutCredentials.post(
      "/buttonColor/CreateButtonColor",
      ButtonColorData
    );
    return response.data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

import { useMutation } from "@tanstack/react-query";
import { createBackgroundColor } from "../services/BackgroundColor";
import { queryClient } from "../App";
import { createButtonColor } from "../services/ButtonColor";
import { createFontSize } from "../services/FontSize";
import { createFontFamily } from "../services/FontFamily";

export const useCreateBackgroundColor = () => {
  return useMutation({
    mutationFn: createBackgroundColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["backgroundColors"] });
    },
    onError: (error) => {
      console.error("Error creating background color:", error);
    },
  });
};

export const useCreateButtonColor = () => {
  return useMutation({
    mutationFn: createButtonColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["buttonColors"] });
    },
    onError: (error) => {
      console.error("Error creating background color:", error);
    },
  });
};

export const useCreateFontSize = () => {
  return useMutation({
    mutationFn: createFontSize,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fontSizes"] });
    },
    onError: (error) => {
      console.error("Error creating background color:", error);
    },
  });
};

export const useCreateFontFamily = () => {
  return useMutation({
    mutationFn: createFontFamily,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fontFamilys"] });
    },
    onError: (error) => {
      console.error("Error creating background color:", error);
    },
  });
};

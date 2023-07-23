import { create } from "zustand";
import { Props as ImageLoaderProps } from "@vincentgraul/react-components/image-loader";

export type State = {
  isLoading: boolean;
  loaderProps: ImageLoaderProps;
};

export type Action = {
  showLoader: (text: string) => void;
  hideLoader: () => void;
};

export const useLoaderStore = create<State & Action>((set) => {
  const defaultLoaderProps = { src: "/icons/loader.svg", text: "Chargement en cours..." };

  return {
    isLoading: false,
    loaderProps: defaultLoaderProps,
    showLoader: (text: string = defaultLoaderProps.text) =>
      set({ isLoading: true, loaderProps: { src: defaultLoaderProps.src, text } }),
    hideLoader: () => set({ isLoading: false, loaderProps: defaultLoaderProps }),
  };
});

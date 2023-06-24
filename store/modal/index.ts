import { create } from "zustand";

export type State = {
  isVisible: boolean;
  Component: any;
  ComponentProps?: any;
};

export type Actions = {
  showModal: (Component: any, ComponentProps?: any) => void;
  hideModal: () => void;
};

export const useModalStore = create<State & Actions>((set) => ({
  isVisible: false,
  Component: null,
  ComponentProps: null,
  showModal: (Component: any, ComponentProps?: any) =>
    set(() => ({ isVisible: true, Component, ComponentProps })),
  hideModal: () => set(() => ({ isVisible: false, Component: null, ComponentProps: null })),
}));

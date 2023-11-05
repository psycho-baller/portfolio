import { type RefObject, createRef } from "react";
import { type Mesh } from "three";
import { devtools } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

export type State = {
  heroSphereCursor: RefObject<Mesh>;
  areaHovered: boolean;
  setAreaHovered: (areaHovered: boolean) => void;
};

export type Actions = {};

export const useStore = createWithEqualityFn<State & Actions>()(
  devtools(
    (set) => ({
      heroSphereCursor: createRef<Mesh>(),
      areaHovered: false,
      setAreaHovered: (areaHovered) => set({ areaHovered }),
    }),
    { name: "website", enabled: import.meta.env.DEV }
  ),
  shallow
);

import { create } from "zustand";
import { Store } from "../types/store";
import { createUserSlice } from "./user-slice";

export const useStore = create<Store>()((...a) => ({...createUserSlice(...a)}))
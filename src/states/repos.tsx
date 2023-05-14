import { IRepos } from "@/interfaces/repos";
import { atom } from "recoil";

export const reposState = atom<IRepos[]>({
    key: 'reposState',
    default: []
  });
import { IRepos } from "@/interfaces/repos";
import { atom } from "recoil";

export const reposState = atom<IRepos[]>({
    key: 'reposState',
    default: [
        {
            name: 'asciidoc-py',
            id: 1234,
            html_url: 'https://github.com/felipec/asciidoc-py',
            owner: {
                id: 123,
                name: 'Felipe',
                imageUrl: 'https://avatars.githubusercontent.com/u/8358?v=4',
                URL: 'https://github.com/RafaelSilva-si'
            }
        },
        {
            name: 'test-admin',
            id: 123,
            html_url: 'https://github.com/felipec/asciidoc-py',
            owner: {
                id: 123,
                name: 'Felipe',
                imageUrl: 'https://avatars.githubusercontent.com/u/8358?v=4',
                URL: 'https://github.com/RafaelSilva-si'
            }
        }
    ]
  });
import { getReposByContributor } from '@/services/api';
import { reposState } from '@/states/repos';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export function useRepos(): {
    handleListRepos: (name: string | any) => void;
} {

    let [, setListRepos] = useRecoilState(reposState);

    const handleListRepos = useCallback(
        async (name: string | any) => {
            try {
                let response = await getReposByContributor(name);
                response = response.map((repo: any) => ({
                    name: repo.name,
                    id: repo.id,
                    html_url: repo.html_url,
                    owner: {
                        id: repo.owner.id,
                        name: repo.owner.login,
                        imageUrl: repo.owner.avatar_url,
                        URL: repo.owner.html_url
                    }
                }))
                setListRepos(response);
            } catch (e: any) {
                console.log(e)
                throw new Error(e);
            }
        },
        []
    );

    return { handleListRepos };
}
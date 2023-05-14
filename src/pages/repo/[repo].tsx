import ModalRepo from "@/components/modalRepo"
import { useRepos } from "@/hooks/useRepos"
import { reposState } from "@/states/repos"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"

export default function RepoUserList() {
    const router = useRouter();
    const { handleListRepos } = useRepos();

    useEffect(() => {
        if(router.query.repo)
        handleListRepos(router.query.repo)
      }, [router.query]);

    const repos = useRecoilValue(reposState)

    return (
        <main className={`flex min-h-screen flex-col items-center justify-center p-10`}>
            <ModalRepo repos={repos}/>
        </main>
    )
}
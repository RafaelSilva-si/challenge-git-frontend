import CardRepo from "@/components/cardRepo"
import ModalRepo from "@/components/modalRepo"
import ModalUser from "@/components/modalUser"
import { reposState } from "@/states/repos"
import { useRecoilValue } from "recoil"

export default function RepoUserList() {
    //List provisional of repos.
    const repos = useRecoilValue(reposState)

    return (
        <main className={`flex min-h-screen flex-col items-center p-24`}>
            <ModalRepo repos={repos}/>
        </main>
    )
}
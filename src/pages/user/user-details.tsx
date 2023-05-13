import ModalUser from "@/components/modalUser";
import { userState } from "@/states/users";
import { useRecoilValue } from "recoil";

export default function UserDetails() {
    
    //Data provisional of person.
    const personData = useRecoilValue(userState)

    return (
        <main className={`flex min-h-screen flex-col items-center p-24`}>
            <ModalUser person={personData}/>
        </main>
    )
}
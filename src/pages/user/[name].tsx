import ModalUser from "@/components/modalUser";
import { userState } from "@/states/users";
import { useRecoilValue } from "recoil";
import { useRouter } from 'next/router';
import { useUsers } from "@/hooks/useUsers";
import { useEffect } from "react";

export default function UserDetails() {
    const { handleGetUserByName } = useUsers();
    const router = useRouter();

    useEffect(() => {
        if(router.query.name)
        handleGetUserByName(router.query.name);
      }, [router.query]);

    const personData = useRecoilValue(userState)

    return (
        <main className={`flex min-h-screen flex-col items-center p-24`}>
            <ModalUser person={personData}/>
        </main>
    )
}
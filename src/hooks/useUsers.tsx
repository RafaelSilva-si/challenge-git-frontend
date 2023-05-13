import { getAllUsers, getUserByName } from '@/services/api';
import { listUsersState } from '@/states/users';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export function useUsers(): {
    handleListUsers: (page: number) => any;
    handleListUserByName: (name: string) => any;
} {
    let [, setListUsers] = useRecoilState(listUsersState);
    const handleListUsers = useCallback(
        async (page: number) => {
            try {
                let response = await getAllUsers(page);
                response = response?.map((user: any) => ({
                    name: user.login,
                    id: user.id,
                    imageUrl: user.avatar_url
                }));
                setListUsers(response);
            } catch (e: any) {
                console.log(e)
                throw new Error(e);
            }
        },
        []
    );

    const handleListUserByName = useCallback(
        async (name: string) => {
            try {
                let response;
                if(name) {
                    response = await getUserByName(name);
                    response = [response];
                } else {
                    response = await getAllUsers(1);
                }
                response = response?.map((user: any) => ({
                    name: user.login,
                    id: user.id,
                    imageUrl: user.avatar_url
                }));
                setListUsers(response);
            } catch (e: any) {
                console.log(e)
                throw new Error(e);
            }
        },
        []
    );

    return { handleListUsers, handleListUserByName };
}
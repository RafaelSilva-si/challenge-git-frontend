import { getAllUsers, getUserByName } from '@/services/api';
import { listUsersState, userState } from '@/states/users';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export function useUsers(): {
    handleListUsers: (page: number) => void;
    handleListUserByName: (name: string) => void;
    handleGetUserByName: (name: string | any) => void;
} {
    let [, setListUsers] = useRecoilState(listUsersState);
    let [, setUser] = useRecoilState(userState);

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

    const handleGetUserByName = useCallback(
        async (name: string) => {
            try {
                let response = await getUserByName(name);
                response = {
                    login: response.login,
                    id: response.id,
                    imageUrl: response.avatar_url,
                    URL: response.html_url,
                    createdAt: `${new Date(response.created_at).getMonth()}/${new Date(response.created_at).getDay()}/${new Date(response.created_at).getFullYear()}`
                };
                setUser(response);
            } catch (e: any) {
                console.log(e)
                throw new Error(e);
            }
        },
        []
    );

    return { handleListUsers, handleListUserByName, handleGetUserByName };
}
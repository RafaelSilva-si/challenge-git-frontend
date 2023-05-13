import { getAllUsers } from '@/services/api';
import { listUsersState } from '@/states/users';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export function useUsers(): { handleListUsers: (page: number) => any; } {
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
    return { handleListUsers };
}
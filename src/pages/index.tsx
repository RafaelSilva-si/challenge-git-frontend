import CardUser from '@/components/cardUser'
import { useUsers } from '@/hooks/useUsers'
import { listUsersState } from '@/states/users'
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil'

export default function Home() {
  const { handleListUsers } = useUsers();
  const users = useRecoilValue(listUsersState);

  useEffect(() => {
    handleListUsers(1);
  },[]);

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className='mb-2 font-semibold'>Users</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {users?.map((person) => (
          <CardUser person={person}/>
        ))}
      </ul>
    </main>
  )
}

import CardUser from '@/components/cardUser'
import InputSearch from '@/components/inputSearch';
import Pagination from '@/components/pagination';
import { useUsers } from '@/hooks/useUsers'
import { listUsersState } from '@/states/users'
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil'

export default function Home() {
  const { handleListUsers, handleListUserByName } = useUsers();
  const users = useRecoilValue(listUsersState);

  const [page, setPage] = useState(1);
  const [user, setUser] = useState('');

  useEffect(() => {
    handleListUsers(page);
  }, []);

  const setNext = () => {
    setPage(page + 1);
    handleListUsers(page + 1);
  }

  const setPrev = () => {
    setPage(page - 1);
    handleListUsers(page - 1);
  }

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <div className="w-full h-[700px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex flex-col items-center pb-10 pt-10 ">
          <h1 className='mb-2 font-semibold'>Users</h1>
          <InputSearch user={user} setUser={setUser} onClick={() => handleListUserByName(user)} />
          <div className='pb-10 pt-10 w-[80%] h-[400px] overflow-auto'>
            <ul role="list" className="divide-y divide-gray-100">
              {users?.map((person) => (
                <CardUser person={person} />
              ))}
            </ul>
          </div>
          {users.length > 20 && (
            <Pagination setPrev={setPrev} setNext={setNext} page={page} />
          )}
        </div>
      </div>
    </main>
  )
}

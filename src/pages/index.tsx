import CardUser from '@/components/cardUser'
import { listUsersState } from '@/states/users'
import { useRecoilValue } from 'recoil'

export default function Home() {

  //List provisional of Peaple.
  const people = useRecoilValue(listUsersState)

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <h1 className='mb-2 font-semibold'>Users</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <CardUser person={person}/>
        ))}
      </ul>
    </main>
  )
}

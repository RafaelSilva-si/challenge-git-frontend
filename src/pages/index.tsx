import CardUser from '@/components/cardUser'

export default function Home() {

  //List provisional of Peaple.
  const people = [
    {
      name: 'rafaelsilva-si',
      id: 1234534,
      imageUrl:
        'https://avatars.githubusercontent.com/u/77937182?v=4',
    },
    {
      name: 'diego-shawandpartners',
      id: 453242,
      imageUrl:
        'https://avatars.githubusercontent.com/u/80269900?v=4',
    },
  ]

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

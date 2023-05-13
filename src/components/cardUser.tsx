import { IUser } from "@/interfaces/users";

export default function CardUser(props: {person: IUser}) {
    const person = props.person;
    return (
        <li key={person.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Id: {person.id}</p>
                </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end mr-5">
                <a href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </li>
    )
}
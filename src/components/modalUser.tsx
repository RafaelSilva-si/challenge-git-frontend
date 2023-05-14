import { IUserDetail } from "@/interfaces/users";

export default function ModalUser(props: { person: IUserDetail }) {
    const person = props.person;

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {person.id ? (
                <div className="flex flex-col items-center pb-10 pt-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={person.imageUrl} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{person.login}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">ID: {person.id}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Created At {person.createdAt}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a href={`/repo/${person.login}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Repositories</a>
                        <a href={person.URL} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Get Profile</a>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center pb-10 pt-10">
                    <svg className="text-gray-200 w-24 h-24 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a href={`/repo/${person.login}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Repositories</a>
                        <a href={person.URL} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Get Profile</a>
                    </div>
                </div>
            )}
        </div>
    )
}
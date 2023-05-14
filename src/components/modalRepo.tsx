import { IRepos } from "@/interfaces/repos";
import CardRepo from "./cardRepo";

export default function ModalRepo(props: {repos: IRepos[]}) {
    const repos = props.repos;
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 pt-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={repos[0]?.owner.imageUrl} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{repos[0]?.owner.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">ID: {repos[0]?.owner.id}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href={repos[0]?.owner.URL} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Get Profile</a>
                </div>
                <h1 className="mb-1 mt-5 font-semibold">Repositories</h1>
                <div className="p-2 w-[90%] h-[400px] overflow-auto">
                    <ul role="list" className="divide-y divide-gray-100 mr-5">
                        {repos.map((repo: any, i: number) => (
                            <CardRepo repo={repo} key={i}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
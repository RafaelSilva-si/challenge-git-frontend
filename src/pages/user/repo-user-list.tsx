import CardRepo from "@/components/cardRepo"
import ModalRepo from "@/components/modalRepo"
import ModalUser from "@/components/modalUser"

export default function RepoUserList() {
    //List provisional of repos.
    const repos = [
        {
            name: 'asciidoc-py',
            id: 1234,
            html_url: 'https://github.com/felipec/asciidoc-py',
            owner: {
                id: 123,
                name: 'Felipe',
                imageUrl: 'https://avatars.githubusercontent.com/u/8358?v=4',
                URL: 'https://github.com/RafaelSilva-si'
            }
        },
        {
            name: 'test-admin',
            id: 123,
            html_url: 'https://github.com/felipec/asciidoc-py',
            owner: {
                id: 123,
                name: 'Felipe',
                imageUrl: 'https://avatars.githubusercontent.com/u/8358?v=4',
                URL: 'https://github.com/RafaelSilva-si'
            }
        }
    ]

    return (
        <main className={`flex min-h-screen flex-col items-center p-24`}>
            <ModalRepo repos={repos}/>
        </main>
    )
}
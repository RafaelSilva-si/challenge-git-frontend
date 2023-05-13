import ModalUser from "@/components/modalUser";

export default function UserDetails() {
    
    //Data provisional of person.
    const personData = {
        login: 'diego-shawandpartners',
        id: 12345,
        createdAt: '2008-04-24',
        URL: 'https://github.com/diego-shawandpartners',
        imageUrl: 'https://avatars.githubusercontent.com/u/80269900?v=4'
    }

    return (
        <main className={`flex min-h-screen flex-col items-center p-24`}>
            <ModalUser person={personData}/>
        </main>
    )
}
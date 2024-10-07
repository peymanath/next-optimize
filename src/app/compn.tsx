import { rev } from "./action/test"

// async function getUsers() {
//     const endpoint = `https://fakestoreapi.com/products/${Math.floor(Math.random() * 20)}`
//     const response = await fetch(endpoint, { next: { tags: ['users'] } })
//     return response.json()
// }

export default async function Users() {
    // const users = await getUsers()

    return (
        <section className='mt-16'>
            <form
                action={rev}
                className='flex items-center justify-between'
            >
                <h3 className='font-serif text-xl'>Users</h3>
                <button>Revalidate users</button>
            </form>
            {/* {JSON.stringify(users)} */}
            {Date.now()}
        </section>
    )
}

import { rev } from "../action/test"

export default function Page() {

    return (
        <>
            <form
                action={rev}
                className='flex items-center justify-between'
            >
                <h3 className='font-serif text-xl'>Users</h3>
                <button>Revalidate users</button>
            </form>
        </>
    )

}
import { Suspense } from "react"
import Users from "./compn"


export default async function Page() {


    return (
        <Suspense fallback='لودینگ'>
            <Users />
        </Suspense>
    )
}
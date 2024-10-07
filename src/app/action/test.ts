'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export async function rev() {
    revalidatePath('/', "page")
}

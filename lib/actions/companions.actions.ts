'use server'

import { auth } from "@clerk/nextjs/server"
import { createSupaClient } from "../supabase"

export const createCompanions = async (formData: CreateCompanion) => {
    const { userId: author } = await auth()
    const supabase = createSupaClient()

    const { data, error} = await supabase
        .from('companions')
        .insert({...formData, author})
        .select()

    if(error || !data) {
        return {
            error: error?.message || 'Failed to create a companion'
        }
    }

    return {
        companion: data[0]
    }
}
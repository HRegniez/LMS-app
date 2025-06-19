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

export const getAllCompanions = async ({limit = 10, page = 1, subject, topic}:GetAllCompanions)=> {
    const supabase = createSupaClient()

    let query = supabase.from('companions').select()

    if(subject && topic) {
        query = query.ilike('subject', `%${subject}%`)
        .or(`topic.ilike.%${topic}%.name.iLike.%${topic}%`)
    } else if(subject) {
        query = query.ilike('subject', `%${subject}%`)
    } else if(topic) {
        query = query.or(`topic.ilike.%${topic}%.name.iLike.%{topic}%`)
     }

     query = query.range((page - 1) * limit, page * limit - 1)

     const {data: companions, error} = await query

     if(error) throw new Error(error.message)

    return companions
}
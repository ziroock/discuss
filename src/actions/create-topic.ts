'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { auth } from '@/auth'
import { db } from '@/db'
import paths from '@/paths'

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: 'Name must be lowercase letters or dashes without spaces' }),
  description: z.string().min(10),
})

export async function createTopic(formState, formData) {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  const session = await auth()
  if (!session || !session.user) {
    return {
      errors: { _form: ['You must be logged in to create a topic'] },
    }
  }

  let topic
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    })
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: { _form: [err.message] },
      }
    } else {
      return {
        errors: { _form: ['Something went wrong'] },
      }
    }
  }
  revalidatePath(paths.home())
  // redirect throws an error, so this function will return early
  redirect(paths.topicShow(topic.slug))
}

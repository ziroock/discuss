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

interface CreateTopicFormState {
  errors: {
    name?: string[]
    description?: string[]
    // _form explained on lecutre 82
    _form?: string[]
  }
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData,
): Promise<CreateTopicFormState> {
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
        errors: { _form: [error.message] },
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

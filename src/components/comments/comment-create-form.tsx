'use client'

import { useFormState } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import { Textarea, Button } from '@nextui-org/react'
import FormButton from '@/components/common/form-button'
import * as actions from '@/actions'

export default function CommentCreateForm({ postId, parentId, startOpen }) {
  const [open, setOpen] = useState(startOpen)
  const ref = (useRef < HTMLFormElement) | (null > null)
  const [formState, action] = useFormState(actions.createComment.bind(null, { postId, parentId }), {
    errors: {},
  })

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset()

      if (!startOpen) {
        setOpen(false)
      }
    }
  }, [formState, startOpen])

  const form = (
    <form action={action} ref={ref}>
      <div className="space-y-2 px-1">
        <Textarea
          name="content"
          label="Reply"
          placeholder="Enter your comment"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(', ')}
        />

        {formState.errors._form ? (
          <div className="rounded border border-red-400 bg-red-200 p-2">
            {formState.errors._form?.join(', ')}
          </div>
        ) : null}

        <FormButton>Create Comment</FormButton>
      </div>
    </form>
  )

  return (
    <div>
      <Button size="sm" variant="light" onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && form}
    </div>
  )
}

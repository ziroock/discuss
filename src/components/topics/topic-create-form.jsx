'use client'

import { useFormState } from 'react-dom'
import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import * as actions from '@/actions'
import FormButton from '@/components/common/form-button'

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, { errors: {} })

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="p4 flex w-80 flex-col gap-4">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            {/* <div className="bg-red-400">{formState.errors.name.join(', ')}</div> if we werent using nextui*/}
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />
            {formState.errors._form && (
              <div className="rounded-lg border border-red-400 bg-red-200 p-2">
                {formState.errors._form.join(', ')}
              </div>
            )}
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

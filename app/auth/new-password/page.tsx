import { NewPaswordForm } from '@/components/auth/new-password-form'
import { Suspense } from 'react'

const NewPassword = () => {
  return (
    <Suspense>
      <NewPaswordForm />
    </Suspense>
  )
}

export default NewPassword
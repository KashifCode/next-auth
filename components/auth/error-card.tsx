import { CardWrapper } from "@/components/auth/card-wrapper"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

export const ErrorCard = () => {
  return (
    <CardWrapper
        headerLabel="Oops, Something went wrong!"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
        showSocial={false}>
            <div className="w-full items-center flex justify-center">
                <ExclamationTriangleIcon className="text-destructive"/>
            </div>
    </CardWrapper>
  )
}

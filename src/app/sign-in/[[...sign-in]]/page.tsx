import { SignIn } from '@clerk/nextjs'

export default function Page() {
  // if (typeof window !== 'undefined')
  return (
    <div className="flex justify-center items-center h-screen">
        <SignIn />

    </div>
  )
  
}
import { AuthButtonServer } from '@/components/auth-button-server';

export default function Login() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 min-h-screen">
      <h1 className="md:text-[100px] text-[40px] strong italic">
        Welcome to X
      </h1>
      <h3 className="text-xl">Log in to have full access to the app.</h3>
      <AuthButtonServer />
    </section>
  )
}

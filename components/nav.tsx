import { AuthButtonServer } from './auth-button-server';

export const Nav = () => {
  return (
    <nav className="flex justify-between w-full h-8 bg-white/10 p-8 items-center">
      <h1 className="text-3xl">☓</h1>
      <AuthButtonServer />
    </nav>
  )
}

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-dark-2">
      <SignIn />
    </main>
  );
};
export default SignInPage;

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center background">
      <SignIn />
    </main>
  );
};
export default SignInPage;

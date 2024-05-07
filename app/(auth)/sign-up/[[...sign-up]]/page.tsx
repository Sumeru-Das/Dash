import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-color-2">
      <SignUp />
    </main>
  );
};
export default SignUpPage;

import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center background">
      <SignUp />
    </main>
  );
};
export default SignUpPage;

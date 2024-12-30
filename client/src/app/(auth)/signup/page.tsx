import SignupForm from "./SignUpForm";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="rounded-2xl w-16 h-16 bg-primary-dark mb-8"></div>
        <h1 className="mb-16 text-3xl font-bold">Create an Account</h1>
        <SignupForm />
      </div>
    </div>
  );
}

import LoginForm from "@/components/auth/LoginForm";
import { Button, Card, Input, Label } from "@/components/ui/index";

function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center p-6">
      <LoginForm />
    </div>
  );
}

export default LoginPage;

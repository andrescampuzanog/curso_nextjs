import LoginForm from "@/components/auth/LoginForm";
import { Button, Card, Input, Label } from "@/components/ui/index";

function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
}

export default LoginPage;

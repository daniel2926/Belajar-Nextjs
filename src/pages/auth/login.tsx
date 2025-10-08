import Link from 'next/link'
import { useRouter } from 'next/router';
import styleLogin from "./login.module.css";

const LoginPage = () => {
    const router = useRouter();
    const handleLogin = () => {
        // Logic for handling login can be added here
        router.push('/product');
    }
  return (
    <div className={styleLogin.login}>
        <h1>Login Page</h1> 
        <button onClick={handleLogin}>Login</button>
        belum punya akun? <Link href="/auth/register">Register</Link>
    </div>
  );
  
}
export default LoginPage;
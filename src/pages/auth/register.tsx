import Link from "next/link";

const Registerpage = () => {
  return (
    <div>
        <h1>Register Page</h1>
        
        sudah punya akun? <Link href="/auth/login">Login</Link>

    </div> 
  ); 
  
}
export default Registerpage;
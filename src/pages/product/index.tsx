import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

const product = () => {
    const [isLogin, setIsLogin] = useState(false);
    const{push} =  useRouter();
    useEffect(() => {
        if(!isLogin){
            push('/auth/login');
        }
    }, []);
    
    return(
        <div>
            <h1>Product Page</h1>
        </div>
    )
}
export default product;

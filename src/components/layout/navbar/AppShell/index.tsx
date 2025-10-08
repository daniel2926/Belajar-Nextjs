import Navbar from "..";

type AppShellProps ={
    children: React.ReactNode
}

const Appshell = (props : AppShellProps) => {
    const { children } = props;
    return (
        <div>
            <Navbar />
            {children}
            <div>Footer</div>
        </div>
    )
}

export default Appshell;
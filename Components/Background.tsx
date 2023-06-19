import { Box } from "@mui/material"
import { ReactNode } from "react"


interface Props {
    children: ReactNode
}

const Background = ({ children }: Props) => {
    return (
        <Box
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6240&q=80")`,
                minHeight: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                zIndex: -1,
            }}
        >
            {children}
        </Box>
    )
}

export default Background

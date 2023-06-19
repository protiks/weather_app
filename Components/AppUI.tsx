import { Box } from "@mui/material"

import AppProvider from "../AppContext"
import Background from "./Background"
import ButtonAppBar from "./ButonAppBar"
import Main from "../Main"

const AppUI = () => {
    return (
        <AppProvider>
            <Background>
                <Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <ButtonAppBar />
                    <Main />
                </Box>
            </Background>
        </AppProvider>

    )
}

export default AppUI
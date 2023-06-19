import { Box, Typography } from "@mui/material"
import Lottie from "react-lottie"
import sun from '../assets/thunderstorm.json';


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sun,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}



const Current = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 2, backgroundColor: 'grey' }}>
            <Box sx={{  margin: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{  margin: 2, flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                    <Typography variant="h3">
                        {'01'}°C
                    </Typography>
                    <Box sx={{ marginLeft: 'auto' }}>
                        <Lottie isClickToPauseDisabled style={{ width: 100 }} options={defaultOptions} />
                    </Box>
                </Box>
                <Box sx={{  margin: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" gutterBottom>
                        {'Rain'}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {'Thu, Mar 17'}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Current
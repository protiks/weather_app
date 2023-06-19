import { Box, Typography } from "@mui/material";
import Lottie from "react-lottie";
import SearchInput from "../SearchInput";

import { getWeatherAnimation } from "@/weatherUtils";

interface Props {
    isLoading: boolean;
    imgUrl?: string;
    main?: string;
    temp?: number;
    date?: string;
    offset?: number;
    city?: string;
    wind?: string
}


const Current = ({ main, temp, date, city, wind }: Props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: getWeatherAnimation(main),
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 2 }}>
            <Box sx={{ margin: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ margin: 2, flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                    <Box>
                        <Typography variant="h3">
                            {temp ? temp : '01'}°C
                        </Typography>
                    </Box>
                    <Box sx={{
                        marginLeft: 'auto', backgroundColor: '#03594F', borderRadius: 2,
                        width: 150, height: 150,
                        boxShadow: 20,
                        ":hover": {
                            boxShadow: 20,

                        }
                    }}>
                        <Lottie isClickToPauseDisabled style={{ width: 150, height: 150 }} options={defaultOptions} />
                    </Box>
                </Box>
                <Box m={2}>
                    <Typography variant="h6" gutterBottom>
                        {city}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {wind} m/s
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {main ? main : 'Rain'}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {date ? date : 'Thu, Mar 17'}
                    </Typography>
                    <SearchInput />
                </Box>
            </Box>
        </Box>
    );
};

export default Current;

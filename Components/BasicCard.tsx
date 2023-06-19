import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Lottie from "react-lottie";
import { getWeatherAnimation } from "@/weatherUtils";

interface BasicCardProps {
    temp: number;
    clouds: number;
    description: string;
    date: number
}

const BasicCard: React.FC<BasicCardProps> = ({ temp, clouds, description, date }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: getWeatherAnimation(description),
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Card
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: 2,
                minWidth: 200,
                ":hover": {
                    boxShadow: 20,

                },
            }}
        >
            <Box>
                <CardContent>
                    <Box>
                        <Box>
                            <Typography variant="h5">
                                {temp}°C
                            </Typography>
                        </Box>
                        <Typography variant="body1">
                            {new Date(date * 1000).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </Typography>
                        <Typography variant="body1" >
                            Clouds: {clouds}%
                        </Typography>
                        <Typography variant="body1">
                            {description}
                        </Typography>
                    </Box>
                    <Box sx={{
                        margin: 2,
                        width: 'auto', height: 100, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 4, boxShadow: 5, ":hover": {
                            boxShadow: 10,

                        }
                    }}>
                        <Lottie speed={2} isClickToPauseDisabled style={{ width: 100  }} options={defaultOptions} />
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
};

export default BasicCard;

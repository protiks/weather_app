import { Box } from "@mui/material";
import BasicCard from "./BasicCard";

const EmptyWeek = () => {
    return (
        <Box m={2} sx={{ alignSelf: 'flex-end', justifyContent: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
            <Box m={2} sx={{ alignSelf: 'flex-end', justifyContent: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
                {[...Array(7)].map((_, index) => (
                    <Box m={2} key={Math.random()}>
                        <BasicCard
                            key={index}
                            temp={0}
                            clouds={0}
                            description={'0'}
                            date={0}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default EmptyWeek;

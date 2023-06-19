import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';

export default function SpacingGrid() {

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                        <Grid key={value} item>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: 140,
                                    width: 200,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        
                                }}

                            >
                                <Grid container justifyContent="center" spacing={2}>
                                    <Typography variant="h5" gutterBottom>
                                        273.15°C
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Clouds: {'day.clouds'}%
                                    </Typography>
                                    <Typography variant="body1">
                                        Description: {'day.weather[0].description'}
                                    </Typography>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            {/* <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Grid container>
                        <Grid item>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">spacing</FormLabel>
                                <RadioGroup
                                    name="spacing"
                                    aria-label="spacing"
                                    value={spacing.toString()}
                                    onChange={handleChange}
                                    row
                                >
                                    {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                                        <FormControlLabel
                                            key={value}
                                            value={value.toString()}
                                            control={<Radio />}
                                            label={value.toString()}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid> */}
        </Grid>
    );
}
import React, { useContext, useState } from "react";
import { Box, Button, Input } from "@mui/material";
import { AppContext } from "../Utils/AppContext";

const SearchInput = () => {
    const [inputValue, setInputValue] = useState("");

    const { setCityValue } = useContext(AppContext)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setCityValue(inputValue);
            setInputValue("");
        }
    };

    const handleButtonClick = () => {
        setCityValue(inputValue);
        setInputValue("");
    };

    return (
        <Box>
            <Input
                placeholder="Enter a city name"
                color="primary"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                sx={{ marginRight: 2 }}
            />
            <Button variant="text" sx={{color: '#03594F'}} onClick={handleButtonClick}>Get</Button>
        </Box>
    );
};

export default SearchInput;

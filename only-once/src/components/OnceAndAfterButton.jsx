// eslint-disable-next-line no-unused-vars
import React from "react";
import { onceAndAfter } from "../lib/onceAndAfter";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const OnceAndAfterButton = () => {
  const handleFirstClick = () => {
    console.log("First click");
  };

  const handleSubsequentClicks = () => {
    console.log("Subsequent click");
  };

  const handleClick = onceAndAfter(handleFirstClick, handleSubsequentClicks);

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleClick}>
        Click me
      </Button>
    </Stack>
  );
};

export default OnceAndAfterButton;

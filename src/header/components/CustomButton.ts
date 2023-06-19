import { styled } from "@mui/material/styles";
import Button, { buttonClasses } from "@mui/base/Button";

const bgColor = {
  500: "#faf5f5",
  600: "#FFFFFF",
  700: "#fcf5f5",
};

const grey = {
  100: "#eaeef2",
  300: "#afb8c1",
  900: "#24292f",
};

const CustomButton = styled(Button)(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-weight: bold;
      font-size: 0.875rem;
      background-color: ${bgColor[500]};
      padding: 12px 24px;
      border-radius: 6px;
      color: #4d4c4c ;
      transition: all 150ms ease;
      cursor: pointer;
      border: none;
      width: 100%;
      box-shadow: 0px 2px 5px ${
        theme.palette.mode === "dark" ? grey[900] : grey[100]
      };
    
      &:hover {
        background-color: ${bgColor[600]};
      }
    
      &.${buttonClasses.active} {
        background-color: ${bgColor[700]};
      }
    
      &.${buttonClasses.focusVisible} {
        box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
      }
    
      &.${buttonClasses.disabled} {
        opacity: 0.5;
      }
      `
);

export default CustomButton;

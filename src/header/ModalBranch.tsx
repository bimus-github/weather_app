import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Grid, Link } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

import { Branchs } from "../models";

import CustomButton from "./components/CustomButton";

interface Props {
  branchs: Branchs;
  setCurrentBranch: React.Dispatch<React.SetStateAction<string>>;
  currentBranch: string;
}

export default function ModalBranch({
  branchs,
  setCurrentBranch,
  currentBranch,
}: Props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <>
      {branchs.find((branch, i) => branch === currentBranch && i > 3) ? (
        <CustomButton sx={{ opacity: 0.5 }} onClick={handleClickOpen}>
          {currentBranch}
        </CustomButton>
      ) : (
        <CustomButton onClick={handleClickOpen}>More</CustomButton>
      )}
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent style={{ backgroundColor: "#0345fc" }}>
          <Box
            sx={{
              width: 400,
              height: 300,
              position: "center",
            }}
          >
            <Grid container spacing={2} style={{ padding: 10 }}>
              {branchs?.map((branch, i) => (
                <Grid key={i} item xs={6}>
                  <CustomButton
                    onClick={() => {
                      setCurrentBranch(branch);
                      setOpen(false);
                      navigate(`/${branch?.toLowerCase()}`);
                    }}
                  >
                    {branch}
                  </CustomButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions
          style={{
            backgroundColor: "#0345fc",
            paddingRight: 50,
            paddingLeft: 50,
          }}
        >
          <CustomButton onClick={handleClose}>Back</CustomButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

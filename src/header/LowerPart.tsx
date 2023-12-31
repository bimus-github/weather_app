import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ModalBranch from "./ModalBranch";
import { Branchs } from "../models";
import Link from "@mui/material/Link";
import { useLocation, useNavigate } from "react-router-dom";

import CustomButton from "./components/CustomButton";

const branchs: Branchs = [
  "Today",
  "Yesterday",
  "Tomorrow",
  "Hourly",
  "Weekly",
  "Weekend",
  "10 day",
  "Monthly",
  "Radar",
  "Severe",
];

const LowerPart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentBranch, setCurrentBranch] = useState<string>(
    location?.pathname?.substring(1)
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1.5} style={{ padding: 5 }}>
        {branchs?.slice(0, 4)?.map((branch, i) => (
          <Grid key={i} item xs={2.4}>
            {currentBranch !== branch ? (
              <CustomButton
                onClick={() => {
                  setCurrentBranch(branch);
                  navigate(`${branch?.toLowerCase()}`);
                }}
              >
                {branch}
              </CustomButton>
            ) : (
              <CustomButton
                underline="none"
                onClick={() => {
                  setCurrentBranch(branch);
                  navigate(`/${branch?.toLowerCase()}`);
                }}
                disabled
              >
                {branch}
              </CustomButton>
            )}
          </Grid>
        ))}
        <Grid item xs={2.4}>
          <ModalBranch
            branchs={branchs}
            setCurrentBranch={setCurrentBranch}
            currentBranch={currentBranch}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LowerPart;

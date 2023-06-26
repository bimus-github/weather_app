import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import TopPart from "./TopPart";
import MiddlePart from "./MiddlePart";
import LowerPart from "./LowerPart";
import HideOnScroll from "./components/HideOnScroll";
import ScrollTop from "./components/ScrollTop";

interface Props {
  children: any;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />

      {/* App Bar */}
      <HideOnScroll {...props}>
        <AppBar>
          <TopPart setCityName={props?.setCityName} />

          <MiddlePart />

          <LowerPart />
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      {/* Main Part */}
      <Container style={{ marginTop: 100, marginBottom: 20 }}>
        {props.children}
      </Container>

      {/* Mutton Which Scroling To Top */}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

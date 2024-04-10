import styled from "@emotion/styled";
import { Drawer, Box, CssBaseline } from "@mui/material";
import { useCallback, useState } from "react";
import { DrawerButton } from "./DrawerButton";

interface PersistentDrawerProps {
  anchorPosition: "left" | "right";
  menuContent: React.ReactNode;
  startPosition?: boolean;
}

export const PersistentDrawer = ({
  anchorPosition,
  menuContent,
  startPosition = false,
}: PersistentDrawerProps) => {
  // start open
  const [open, setOpen] = useState(startPosition);

  const toggleDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <StyledBox>
      <CssBaseline />
      <DrawerButton toggleDrawer={toggleDrawer} open={open} />

      <CssBaseline />
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        anchor={anchorPosition}
      >
        <DrawerHeader>
          <DrawerButton toggleDrawer={toggleDrawer} open={open} />
        </DrawerHeader>

        {menuContent}
      </Drawer>
    </StyledBox>
  );
};

const DrawerHeader = styled("div")`
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: flex-end;
`;

const StyledBox = styled(Box)`
  display: flex;
  background-color: red;
`;

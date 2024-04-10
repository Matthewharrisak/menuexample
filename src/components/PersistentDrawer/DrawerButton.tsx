import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ChevronLeft } from "@mui/icons-material";

export interface DrawerButtonProps {
  toggleDrawer: () => void;
  open: boolean;
}

export const DrawerButton = ({ toggleDrawer, open }: DrawerButtonProps) => {
  if (open) {
    return (
      <IconButton onClick={toggleDrawer}>
        <ChevronLeft />
      </IconButton>
    );
  }
  return (
    <IconButton edge="start" sx={{ mr: 4 }} onClick={toggleDrawer}>
      <MenuIcon />
    </IconButton>
  );
};

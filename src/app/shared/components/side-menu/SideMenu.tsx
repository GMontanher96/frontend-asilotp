import { Drawer, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon } from "@mui/material";
import { ReactNode } from "react";
import { Box } from "@mui/system";

export const SideMenu = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              variant="circular"
              src="/images/avatar/lar_logo.png"
              sx={{ height: theme.spacing(13), width: theme.spacing(13) }}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
                <ListItemButton>
                    <ListItemIcon>
                        <Icon>home</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    <ListItemIcon>
                        <Icon>home</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Serviço Social" />
                    <ListItemIcon>
                        <Icon>diversity</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Enfermagem" />
                    <ListItemIcon>
                        <Icon>healing</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Terapia Ocupacional" />
                    <ListItemIcon>
                        <Icon>home</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Fisioterapia" />
                    <ListItemIcon>
                        <Icon>home</Icon>
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};

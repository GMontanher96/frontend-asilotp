import { Drawer, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";
import { Box } from "@mui/system";
import { useDrawerContext } from '../../contexts/DrawerContext';

export const SideMenu = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
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
                </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};

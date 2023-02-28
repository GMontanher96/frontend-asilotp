import { Box, TextField, Button, Paper, useTheme, Icon } from "@mui/material";

interface IToolbarListProps {
  textSearch?: string;
  showInputSearch?: boolean;
  onEditTextSearch?: (newText: string) => void;
  textButtonNew?: string;
  showButtonNew?: boolean;
  onClickNew?: () => void;
}

export const ToolbarList: React.FC<IToolbarListProps> = ({
  textSearch = "",
  showInputSearch = false,
  onEditTextSearch,
  onClickNew,
  textButtonNew = "Pesquisar",
  showButtonNew = true,
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      gap={1}
      component={Paper}
    >
      {showInputSearch && (
        <TextField
          size="small"
          value={textSearch}
          onChange={(e) => onEditTextSearch?.(e.target.value)}
          placeholder="Pesquisar..."
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">
       { showButtonNew && (
         <Button
         color="primary"
         disableElevation
         variant="contained"
         onClick={onClickNew}
         startIcon={<Icon>search</Icon>}
       >
         {textButtonNew}
       </Button>
       )}
      </Box>
    </Box>
  );
};

import { Box, Divider, Paper, Skeleton, useTheme } from "@mui/material";
import { Button } from "@mui/material";
import { Icon } from "@mui/material";

interface IToolDetailProps {
  textNewButton?: string;
  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveAndCloseButton?: boolean;

  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showSaveButtonLoading?: boolean;
  showSaveAndCloseButtonLoading?: boolean;

  onClickNew?: () => void;
  onClickBack?: () => void;
  onClickDelete?: () => void;
  onClickSave?: () => void;
  onClickSaveAndClose?: () => void;
}

export const ToolbarDetail: React.FC<IToolDetailProps> = ({
  textNewButton = "Novo",
  
  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showSaveAndCloseButton = false,

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,
  showSaveAndCloseButtonLoading = false,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveAndClose,
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
      {(showSaveButton && !showSaveButtonLoading) && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={onClickSave}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {showSaveButtonLoading && <Skeleton width={110} height={60} />}

      {(showSaveAndCloseButton  && !showSaveAndCloseButtonLoading)&& (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickSaveAndClose}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}
      {showSaveAndCloseButtonLoading && <Skeleton width={110} height={60} />}

      {(showDeleteButton && !showDeleteButtonLoading) && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickDelete}
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}

      {showDeleteButtonLoading && <Skeleton width={110} height={60} />}

      {(showNewButton && !showNewButtonLoading) && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickNew}
          startIcon={<Icon>add</Icon>}
        >
          {textNewButton}
        </Button>
      )}

      {showNewButtonLoading && <Skeleton width={110} height={60} />}

      <Divider variant="middle" orientation="vertical" />
      {(showBackButton && !showBackButtonLoading) && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickBack}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}

      {showBackButtonLoading && <Skeleton width={110} height={60} />}

    </Box>
  );
};

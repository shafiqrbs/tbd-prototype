import { useDisclosure } from "@mantine/hooks";
import { Box, Button, Drawer } from "@mantine/core";
import { useTranslation } from "react-i18next";

const FullDetails = () => {
  const [t, i18n] = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Box>
        {/* Details start */}
        <Drawer size={"75%"} opened={opened} onClose={close} title="Details">
          Show details
        </Drawer>
        {/* Details end */}

        <Button bg={"#fa5252"} p={5} w={"100%"} onClick={open}>
          {t("Show")}
        </Button>
      </Box>
    </>
  );
};

export default FullDetails;

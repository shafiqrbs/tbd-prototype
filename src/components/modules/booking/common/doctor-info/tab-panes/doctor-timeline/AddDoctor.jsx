import { useState } from "react";

import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  Button,
  Box,
  Text,
  Input,
  Textarea,
  FileInput,
  Checkbox,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconCloudUpload, IconPlus } from "@tabler/icons-react";

const AddDoctor = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const uploadIcon = <IconCloudUpload />;
  return (
    <>
      <Drawer offset={0} opened={opened} onClose={close} title="Add Timeline">
        <Box>
          <form action="#">
            <Box>
              <Input.Wrapper label="Input label">
                <Input required type="text" placeholder="Title" />
              </Input.Wrapper>
            </Box>

            <Box mt={10}>
              <DateInput
                valueFormat="YYYY MMM DD"
                label="Date input"
                placeholder="Date input"
              />
            </Box>

            <Box mt={10}>
              <Textarea label="Description" placeholder="Description" />
            </Box>

            <Box mt={10}>
              <FileInput
                label="Attach Document"
                rightSection={<IconCloudUpload />}
                placeholder={`Upload files`}
                multiple
              />
            </Box>

            <Box mt={10}>
              <Checkbox defaultChecked label="Visible to this person." />
            </Box>

            <Box mt={30}>
              <Button bg={"green"} w={"100%"}>
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Drawer>

      <Button onClick={open} bg={"#40c057"} px={10}>
        <IconPlus /> Add
      </Button>
    </>
  );
};

export default AddDoctor;

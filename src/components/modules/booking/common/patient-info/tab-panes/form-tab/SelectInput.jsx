import { Box, Flex, Select, Text } from "@mantine/core";

function SelectInput({ label, inputPlaceholder, dataArr, inputWidth }) {
  return (
    <>
      <Box mb={10}>
        <Flex justify={"flex-start"} align={"center"}>
          <Text display={label == "" ? "none" : "block"} fz={"14px"} w={"35%"}>
            {label}
          </Text>
          <Box w={inputWidth}>
            <Select
              fz={"14px"}
              w={"100%"}
              placeholder={inputPlaceholder}
              data={[...dataArr]}
              filter={""}
              searchable
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
export default SelectInput;

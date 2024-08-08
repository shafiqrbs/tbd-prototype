import { Box, Checkbox } from "@mantine/core";

const CheckBoxInput = ({ label }) => {
  return (
    <>
      <Box>
        <Box mb={12}>
          <Checkbox label={label} color={"#fa5252"} iconColor={"#fff"} />
        </Box>
      </Box>
    </>
  );
};

export default CheckBoxInput;

import { Box, Flex, Input, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const FormInput = ({
  label,
  inputType,
  inputPlaceholder,
  nameID,
  inputWidth,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box mb={10}>
        <Flex justify={"flex-start"} align={"center"}>
          <Text fz={"14px"} w={"35%"} display={label == "" ? "none" : "block"}>
            {t(label)}
          </Text>
          <Input
            fz={"14px"}
            w={inputWidth}
            type={inputType}
            placeholder={t(inputPlaceholder)}
            required={false}
            validationMessage={t("InvalidEmailText")}
            form={"form"}
            name={nameID}
            id={nameID}
            nextField={"credit_limit"}
          />
        </Flex>
      </Box>
    </>
  );
};

export default FormInput;

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  Modal,
  Button,
  Tooltip,
  Box,
  TextInput,
  Flex,
  Checkbox,
} from "@mantine/core";
import styles from "../../../../assets/css/BookingIndex.module.css";
import { IconFilterSearch } from "@tabler/icons-react";
import { t } from "i18next";
import { IconSearch } from "@tabler/icons-react";

function ModalFilter(props) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      <Modal
        size={"xl"}
        opened={opened}
        onClose={close}
        title="Advanced Search & Filter"
        fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 200 }}>
        <form>
          <Flex align={"center"} pos={"relative"}>
            <Box w={"100%"}>
              <TextInput
                w={"100%"}
                placeholder={t("Search")}
                required={false}
                validationMessage={t("InvalidEmailText")}
                inputHint={t("InvalidEmailHint")}
                tooltip={t("InvalidEmail")}
                name={"search"}
                id={"search"}
              />
            </Box>
            <Box pos={"absolute"} top={"0"} right={"0"}>
              <Button
                type="submit"
                bg={"#50C565"}
                py={"0"}
                className={`${styles.button_style}`}>
                <IconSearch />
              </Button>
            </Box>
          </Flex>

          <ul className={`${styles.grid_2} ${styles.ul_p0}`}>
            {props.filterArray.map((data) => {
              return (
                <li className={styles.modal_anchor_style} key={data?.index}>
                  {/* <a href={data?.href}>{data?.name}</a> */}
                  <Checkbox
                    label={t(`${data?.name}`)}
                    required={false}
                    validationMessage={t("InvalidEmailText")}
                    inputHint={t("InvalidEmailHint")}
                    tooltip={t("InvalidEmail")}
                    name={`${data?.name}`}
                    id={`${data?.name}`}
                    nextField={"submit"}
                  />
                </li>
              );
            })}
          </ul>

          <Flex align={"center"} justify={"flex-end"} gap={"10px"}>
            <Button type="submit" bg={"#50C565"}>
              Apply
            </Button>
            <Button type="reset" bg={"#ff6b6b"}>
              Reset
            </Button>
          </Flex>
        </form>
      </Modal>

      <Tooltip label={"Advanced search & filter"}>
        <Button onClick={open} px={8} className={styles.toggle_btn_style}>
          <IconFilterSearch w={"16px"} height={"16px"} />
        </Button>
      </Tooltip>
    </>
  );
}
export default ModalFilter;

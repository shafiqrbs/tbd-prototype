import {
  Box,
  Button,
  FileInput,
  Flex,
  rem,
  ScrollArea,
  Switch,
  Text,
  Tooltip,
} from "@mantine/core";
import React, { useState } from "react";
import styles from "../../../../../assets/css/BookingIndex.module.css";
import { Link } from "react-router-dom";
import { IconCheck, IconEdit, IconRefresh, IconX } from "@tabler/icons-react";
import { IconMessages } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import ProfilePictureUploader from "../ProfilePictureUploader";

const PatientSidebar = () => {
  const [checked, setChecked] = useState(true);
  const icon = (
    <IconEdit style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );
  const { t, i18n } = useTranslation();

  /* porfile image update logic start */
  const [imageSrc, setImageSrc] = useState(
    "/images/karel-mistrik-_0LmQ_hVSV0-unsplash.jpg"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };
  /* porfile image update logic end */

  const patientSidebarInfo = [
    {
      textHeader: "ID",
      info: "100zy3x4unme",
    },
    {
      textHeader: "Name",
      info: "Md Foysal Mahmud",
    },
    {
      textHeader: "Mobile",
      info: "+880 1700-000000",
    },
    {
      textHeader: "Email",
      info: "email324@gmail.com",
    },
    {
      textHeader: "Address",
      info: "Khilkhet, Dhaka - 1229",
    },
    {
      textHeader: "Position",
      info: "Neurologist & Cardiologist",
    },
  ];

  return (
    <>
      <ScrollArea h={"100%"} scrollbarSize={"0px"}>
        <Box ta={"center"} py={"16px"}>
          {/* Edit profile picture */}
          <ProfilePictureUploader
            imageSrc={imageSrc}
            handleClick={handleClick}
            handleImageChange={handleImageChange}
          />
          {/* Edit profile picture */}
        </Box>

        <Box mt={15}>
          {patientSidebarInfo.map((data) => {
            return (
              <Text
                key={data.index}
                display={data.info == "" ? "none" : "block"}
                className={styles.profile_border_b}>
                <Text fw={"bold"} display={"inline"}>
                  {t(data.textHeader)}:
                </Text>{" "}
                {data.info}
              </Text>
            );
          })}

          <Box className={styles.profile_border_b}>
            <Flex justify={"flex-start"} gap={"8px"} align={"center"}>
              <Text fz={"h4"}>{t("Actions")}: </Text>
              <Tooltip label="Edit">
                <Button px={5} py={0} bg={"none"} c={"black"}>
                  <IconEdit color="#228BE6" />
                </Button>
              </Tooltip>
              <Tooltip label="Reset">
                <Button px={5} py={0} bg={"none"} c={"black"}>
                  <IconRefresh color="#FA5252" />
                </Button>
              </Tooltip>

              <Tooltip label="Active Or Inactive">
                <Button px={5} py={0} bg={"none"} c={"#2f9e44"}>
                  <Switch
                    defaultChecked
                    size="sm"
                    onLabel="Active"
                    offLabel="Inactive"
                    onChange={(event) =>
                      setChecked(event.currentTarget.checked)
                    }
                    color={"#2f9e44"}
                    thumbIcon={
                      checked ? (
                        <IconCheck
                          style={{ width: rem(12), height: rem(12) }}
                          color={"#2f9e44"}
                          stroke={3}
                        />
                      ) : (
                        <IconX
                          style={{ width: rem(12), height: rem(12) }}
                          color={"#FA5252"}
                          stroke={3}
                        />
                      )
                    }
                  />
                </Button>
              </Tooltip>

              <Tooltip label="Message">
                <Button px={5} py={0} bg={"none"} c={"black"}>
                  <IconMessages />
                </Button>
              </Tooltip>
            </Flex>
          </Box>
        </Box>

        <Box mt={22}>
          <img
            className={`${styles.id_img}`}
            src="/images/ID.jpg"
            alt="ID Card Picture"
          />

          <Flex gap={"10px"}>
            <Box w={"50%"} mt={"sm"} ta={"center"}>
              <Link className={styles.id_card_download} download={"#"} to={"#"}>
                {t("DownloadID")}
              </Link>
            </Box>
            <Box w={"50%"} mt={"sm"} ta={"center"}>
              <Link className={styles.id_card_print} to={"#"}>
                {t("PrintID")}
              </Link>
            </Box>
          </Flex>
        </Box>
      </ScrollArea>
    </>
  );
};

export default PatientSidebar;

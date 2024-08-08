import { Box, Flex, Image, List, Text } from "@mantine/core";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import { useTranslation } from "react-i18next";

const BasicInfo = ({ services }) => {
  const { t, i18n } = useTranslation();
  const profileBasicInfo = [
    {
      textHeader: "ID",
      info: "100zy3x4unme",
    },
    {
      textHeader: "Name",
      info: "Md Foysal Mahmud",
    },
    {
      textHeader: "About",
      info: "Compassionate, capable, patient-focused professional offering a high level of expertise, ambition, and drive to enhance the quality of patient outcomes in Emergency/Urgent Care. Repeatedly singled out by peers for improving patient satisfaction through a rich blend of medical expertise and laboratory excellence. Easily builds affinity and trust with people from all backgrounds, age groups, and life circumstances. Goal-driven individual with unmatched commitment, sound diagnostic and problem-resolution skills, and ability to remain calm and composed in the face of potential emergency and life-threatening situations. Follows code of ethics and protocol; highly accountable. Delivers uncompromising work ethic, positive bedside manner/demeanor, and positive communication skills in difficult situations.",
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
      info: "Uttara-1230, Cresent Hospital",
    },
    {
      textHeader: "Position",
      info: "Neurologist & Cardiologist",
    },
  ];
  return (
    <>
      <Box>
        <Box pos={"relative"}>
          <Image
            height={"300px"}
            width={"100%"}
            fit="cover"
            src={"/images/hospital-banner.jpg"}
            alt="Hospital banner"
          />
          <Box
            pos={"absolute"}
            top={"0"}
            w={"100%"}
            h={"100%"}
            opacity={0.5}
            bg={"#000"}></Box>

          <Box
            pos={"absolute"}
            p={"25px"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            c={"white"}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              gap={"15px"}
              h={"100%"}>
              <Text
                fw={"bold"}
                tt={"uppercase"}
                fz={"h1"}
                ta={"center"}
                c={"#fad5d5"}>
                Dhaka Medical Bangladesh
              </Text>
              <Text fw={"bold"} fz={"h3"} ta={"center"} c={"#ffeded"}>
                Uttara - 1230, Medical road.
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box mt={"md"}>
          {profileBasicInfo.map((data) => {
            return (
              <>
                <Text key={data.index}>
                  <Text
                    fw={"bold"}
                    display={`${data.info == "" ? "none" : "inline"}`}>
                    {t(data.textHeader)}:{" "}
                  </Text>
                  {data.info}
                </Text>
              </>
            );
          })}

          <Text>
            <Text fw={"bold"} display={`${services == "" ? "none" : "block"}`}>
              {t("Services")}:{" "}
            </Text>
            <List
              listStyleType="circle"
              ml={"25px"}
              display={`${services == "" ? "none" : "block"}`}>
              {services?.map((service) => {
                return (
                  <Box w={"calc(33% - 10px)"} display={"inline-block"}>
                    <List.Item key={service?.id}>
                      {t(service?.serviceName)}
                    </List.Item>
                  </Box>
                );
              })}
            </List>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default BasicInfo;

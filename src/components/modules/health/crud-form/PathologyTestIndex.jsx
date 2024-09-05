// second comp
import React, { useState } from "react";
import { Card, Button, Text, Modal, TextInput } from "@mantine/core";
// second comp

import { Box, Grid, Progress } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingProgress } from "../../../global-hook/loading-progress/getLoadingProgress.js";
import HealthHeaderNavbar from "../../inventory/configuraton/HealthHeaderNavbar.jsx";
import TestForm from "./PathologyTestForm.jsx";
import TestTable from "./PathologyTestTable.jsx";
import TestUpdateForm from "./PathologyTestUpdateForm.jsx";

function TestIndex() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const insertType = useSelector((state) => state.crudSlice.insertType);
  const customerFilterData = useSelector(
    (state) => state.crudSlice.customerFilterData
  );

  const progress = getLoadingProgress();

  const user = localStorage.getItem("user");

  return (
    <>
      {progress !== 100 && (
        <Progress color="red" size={"xs"} striped animated value={progress} />
      )}
      {progress === 100 && (
        <>
          <HealthHeaderNavbar
            pageTitle={t("ManageCustomer")}
            roles={t("Roles")}
            allowZeroPercentage=""
            currencySymbol=""
          />
          <Box p={"8"}>
            <Grid columns={24} gutter={{ base: 8 }}>
              <Grid.Col span={15}>
                <Box bg={"white"} p={"xs"} className={"borderRadiusAll"}>
                  <TestTable />
                </Box>
              </Grid.Col>
              <Grid.Col span={9}>
                {insertType === "create" ? <TestForm /> : <TestUpdateForm />}
              </Grid.Col>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}

export default TestIndex;

const roomData = [
  { id: 1, roomNumber: "101", status: "free" },
  { id: 2, roomNumber: "102", status: "booked" },
  { id: 3, roomNumber: "103", status: "reserved" },
  { id: 4, roomNumber: "104", status: "maintenance" },
  { id: 5, roomNumber: "105", status: "free" },
];

function HospitalRooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isBookingOpen, setBookingOpen] = useState(false);

  const handleRoomClick = (room) => {
    if (room.status === "free") {
      setSelectedRoom(room);
      setBookingOpen(true);
    } else {
      alert(`Room ${room.roomNumber} is not available. Status: ${room.status}`);
    }
  };

  const handleBookingSubmit = () => {
    alert(`Booking for Room ${selectedRoom.roomNumber} submitted!`);
    setBookingOpen(false);
  };

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {roomData.map((room) => (
        <Card key={room.id} shadow="sm" p="lg">
          <Text>Room: {room.roomNumber}</Text>
          <Text>Status: {room.status}</Text>
          <Button
            onClick={() => handleRoomClick(room)}
            disabled={room.status !== "free"}>
            {room.status === "free" ? "Book Now" : "Unavailable"}
          </Button>
        </Card>
      ))}

      <Modal
        opened={isBookingOpen}
        onClose={() => setBookingOpen(false)}
        title={`Booking Room ${selectedRoom?.roomNumber}`}>
        <form onSubmit={handleBookingSubmit}>
          <TextInput label="Your Name" placeholder="Enter your name" required />
          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            required
          />
          <Button type="submit">Submit Booking</Button>
        </form>
      </Modal>
    </div>
  );
}

export { HospitalRooms };

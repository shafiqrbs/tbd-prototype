import { Button, Box, Tooltip } from "@mantine/core";
import styles from "../../../../assets/css/BookingIndex.module.css"; // Import your styles
import { IconCamera } from "@tabler/icons-react";

const ProfilePictureUploader = ({
  imageSrc,
  handleClick,
  handleImageChange,
}) => {
  return (
    <Box pos={"relative"}>
      <Box className={styles.profile_picture_uploader}>
        <img src={imageSrc} alt="Profile" />
      </Box>

      <Box pos={"absolute"} bottom={15} right={"18%"}>
        <Tooltip label="Edit">
          <Button
            className={styles.box_border}
            p={0}
            h={36}
            w={36}
            bg={"#40c057"}
            onClick={handleClick}
            radius={"50px"}>
            <IconCamera color="#fff" size={20} />
          </Button>
        </Tooltip>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </Box>
    </Box>
  );
};

export default ProfilePictureUploader;

/* import React, { useState } from "react";
import { Button, Box } from "@mantine/core";

const ProfileImageUploader = () => {
  const [image, setImage] = useState(
    "/images/karel-mistrik-_0LmQ_hVSV0-unsplash.jpg"
  );
  const inputRef = React.useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <Box>
      <Button
        onClick={handleButtonClick}
        styles={(theme) => ({
          root: {
            borderRadius: "50%",
            padding: 0,
            width: "100px",
            height: "100px",
            overflow: "hidden",
          },
        })}>
        <img
          src={image}
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Button>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
        accept="image/*"
      />
    </Box>
  );
};

export default ProfileImageUploader;
 */

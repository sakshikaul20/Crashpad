import React, { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Myprofile from "../../images/myprofile.jpeg";
import { useNavigate } from "react-router-dom";

const LoginButton = styled(Button)({
  marginTop: "1em",
});

interface UserFormState {
  userName: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  aboutMe: string;
}

const ShowUserProfile: React.FC = () => {
  const [profileFormData, setProfileFormData] = useState<UserFormState>({
    userName: "Kenson",
    firstName: "Kenson",
    lastName: "Pribyl",
    age: 30,
    gender: "Male",
    aboutMe: "I love traveling different places!",
  });

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/editprofile");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <img
            src={Myprofile}
            style={{ width: "100%", borderRadius: "20px", height: "200px" }}
          />
        </Grid>
        <Grid sx={{ mr: 2, ml: 2 }}>
          <p>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              User Name:{" "}
            </span>
            {profileFormData.userName}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Name:{" "}
              </span>
              {profileFormData.firstName} {profileFormData.lastName}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Gender:{" "}
              </span>{" "}
              {profileFormData.gender}{" "}
            </p>
          </div>
          <p>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Age: </span>{" "}
            {profileFormData.age} years
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                About:{" "}
              </span>{" "}
              {profileFormData.aboutMe}
            </p>
          </div>
          <Button
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#FDA117" }}
            onClick={handleEdit}
          >
            Edit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowUserProfile;

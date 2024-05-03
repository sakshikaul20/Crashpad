import React, { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import RVimage from "../../images/vehicle.jpg";

const LoginButton = styled(Button)({
  marginTop: "1em",
});

interface AccommodationInterface {
  type: string;
  length: number;
  width: number;
  height: number;
  year: number;
  model: string;
  make: string;
  aboutAcco: string;
}

const ShowAccomodation: React.FC = () => {
  const [accoFormData, setAccoFormData] = useState<AccommodationInterface>({
    type: "RV",
    length: 20,
    width: 10,
    height: 15,
    year: 2024,
    model: "Jayco",
    make: "Seneca",
    aboutAcco: "This is the best RV to travel!",
  });

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <img src={RVimage} style={{ width: "100%", borderRadius: "20px" }} />
        </Grid>
        <Grid sx={{ mr: 2, ml: 2 }}>
          <h6
            style={{ marginTop: "10px", fontSize: "larger", fontWeight: "700" }}
          >
            Your Accommodation
          </h6>
          <p>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>Type: </span>
            {accoFormData.type}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Length:{" "}
              </span>{" "}
              {accoFormData.length} ft
            </p>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Width:{" "}
              </span>{" "}
              {accoFormData.width} ft
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Height:{" "}
              </span>{" "}
              {accoFormData.height} ft
            </p>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Year:{" "}
              </span>{" "}
              {accoFormData.year}{" "}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Model:{" "}
              </span>{" "}
              {accoFormData.model}
            </p>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                Make:{" "}
              </span>{" "}
              {accoFormData.make}
            </p>
          </div>
          <p>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              About:{" "}
            </span>{" "}
            {accoFormData.aboutAcco}
          </p>
          <LoginButton
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#FDA117" }}
          >
            Edit
          </LoginButton>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowAccomodation;

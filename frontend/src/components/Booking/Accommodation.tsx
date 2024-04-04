import React, {useState} from "react";
import { TextField, Button, Typography  } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ShowAccomodation from "./ShowAccomodation";


const LoginButton = styled(Button)({
    marginTop: '1em'
  });

const SideBySide = styled('div')({
    display: 'flex',
    gap:'5px',
  })

interface AccommodationInterface{
    type: string;
    length: number;
    width: number;
    height: number;
    year: number;
    model: string;
    make:string;
    aboutAcco:string;
}

const Accommodation: React.FC = () => {

    const [accoFormData, setAccoFormData] = useState<AccommodationInterface>({
        type:'RV',
        length:20,
        width:10,
        height:15,
        year:2024,
        model:"Jayco",
        make:'Seneca',
        aboutAcco:"This is the best RV to travel!"
    });

    const [showAccomodationValue, setShowAccomodationValue] = useState(true);
    const [errors, setErrors] = useState<any>();

    const validateForm = () => {
    
        let newErrors:any = {};
    
        if(!accoFormData.type){
          newErrors.type = "Type is required."
        }
        if(!accoFormData.length){
          newErrors.length = "Length is required."
        }
        if(!accoFormData.width){
          newErrors.width = "Width is required."
        }
        if(!accoFormData.height){
          newErrors.height = "Height is required."
        }
        if(!accoFormData.year){
          newErrors.year = "Year is required."
        }
        if(!accoFormData.make){
            newErrors.make = "Make is required."
          }
          if(!accoFormData.model){
            newErrors.model = "Model is required."
          }
        if(!accoFormData.aboutAcco){
          newErrors.aboutAcco = "About accommodation is required."
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
      }

    const submitAccoForm = (e:any) => {
        // alert('Accommodation')
        const isValid = validateForm();
        console.log(isValid)
        if(isValid) {
            console.log("Form validation", setAccoFormData);
            setShowAccomodationValue(false);
        }else{
            setShowAccomodationValue(true);
            console.log("Form validation failed");
        }
    }

    const handleAccoForm = (e:any) => {
        const {name, value} = e.target;
        setAccoFormData({...accoFormData, [name]:value});
    }

    const handleAccommodation = () => {
        // alert("Show profile");
        setShowAccomodationValue(true);
      }

    return (
        <>
          <Grid container spacing={2}>
              <Grid xs={4} >
                  <img src='vehicle.jpg' style={{ width: "100%", borderRadius: "20px" }} />
                  
              </Grid>
              {
                  showAccomodationValue ? (<ShowAccomodation accoFormData={accoFormData} onClickEdit={handleAccommodation}></ShowAccomodation>) :
              (<Grid sx={{ mr:1,ml:1 }} >
              <form noValidate autoComplete="off">
              <FormControl fullWidth style={{ marginTop:"15px" }}>
                    <InputLabel id="demo-simple-select-label">Accommodation Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="type"
                      value={accoFormData.type}
                      label="Accommodation Type"
                      onChange={handleAccoForm}
                    >
                      <MenuItem value="rv">RV</MenuItem>
                      <MenuItem value="rv2">RV2</MenuItem>
                      <MenuItem value="rv3">rv3</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <SideBySide>
                  <TextField
                      name="length"
                      margin="normal"
                      id="length"
                      label="Length"
                      variant="outlined"
                      value={accoFormData.length }
                      onChange={handleAccoForm}
                      helperText={errors ? errors.length : ""}
                  />
                  <TextField
                      name="width"
                      margin="normal"
                      id="width"
                      label="Width"
                      variant="outlined"
                      value={accoFormData.width }
                      onChange={handleAccoForm}
                      helperText={errors ? errors.width : ""}
                  />

                  </SideBySide>
                  <SideBySide>

                  <TextField
                      fullWidth
                      name="height"
                      margin="normal"
                      id="height"
                      label="Height"
                      variant="outlined"
                      value={accoFormData.height }
                      onChange={handleAccoForm}
                      helperText={errors ? errors.height : ""}
                  />

                  <TextField
                      fullWidth
                      name="year"
                      margin="normal"
                      id="Year"
                      label="Year"
                      variant="outlined"
                      value={accoFormData.year }
                      onChange={handleAccoForm}
                      helperText={errors ? errors.year : ""}
                  />
                  </SideBySide>

                  
                  <SideBySide>
                  <TextField
                      fullWidth
                      name="model"
                      margin="normal"
                      id="model"
                      label="Model"
                      variant="outlined"
                      value={accoFormData.model }
                      onChange={handleAccoForm}
                      helperText={errors ? errors.model : ""}
                  />

                  <TextField
                      fullWidth
                      name="make"
                      margin="normal"
                      id="make"
                      label="Make"
                      variant="outlined"
                      value={accoFormData.make }
                      onChange={handleAccoForm}
                      helperText={errors ? errors.make : ""}
                  />
                  </SideBySide>
                  
                  <TextField
                      fullWidth
                      placeholder="Tell me about your accommodation..."
                      multiline
                      name="aboutAcco"
                      margin="normal"
                      id="aboutAcco"
                      label="About Accommodation"
                      variant="outlined"
                      rows={2}
                      maxRows={4}
                      value={accoFormData.aboutAcco }
                      onChange={handleAccoForm}
                      helperText={errors ? errors.aboutAcco : ""}
                  />

                  <LoginButton
                      fullWidth
                      variant="contained"
                      style={{ backgroundColor: '#FDA117' }}
                      onClick={submitAccoForm}
                  >
                      Submit
                  </LoginButton>
                  <Typography variant="body2" style={{ marginTop: '1em' }}>
                      
                  </Typography>
                  </form>
              </Grid> )}
          </Grid>
        </>
    );
}

export default Accommodation;
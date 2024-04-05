// import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
// import { Card, Container, dividerClasses} from '@mui/material'; 
// import {Link} from 'react-router-dom';
import hostimage from './images/hostimage.jpg';
import Pad1 from './images/Pad1.jpg';
import Pad2 from './images/Pad2.jpg';
import Pad3 from './images/Pad3.jpg';
import Pad4 from './images/Pad4.jpg';
import Pad5 from './images/Pad5.jpg';
// import ProfileImg from './images/ProfileImg.png';
// import Hprofile from './components/Hprofile.tsx;'
import Calendar from 'react-calendar';
import Header from './components/Header.tsx';


//Styled components for the root container
const RootContainer = styled('div')({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
      
});

// // const Header = styled(card)({
// //     width: '100%',
// //     maxWidth: '100%',
// //     marginTop: '10vh',
// //     display: 'flex',
// //     justifyContent: 'right',

// // })


//Styled components for the host image
const HostPic = styled(Card)({
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: '2em',
    borderRadius: '8px',
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
    marginRight: '1em'
});

// // //define interface for Properties component props
// // interface PropertiesProps {
// //     onPropertySelection: (property: any) => void;
// // }

// // Styled component for Properties
// // const Properties = styled(Card)({
// //     display: 'inline',

// // })<PropertiesProps>
// const Properties = styled(Card)({
//     display: 'inline',
// });
   

// const PropertyCard = styled(Card)({
//     width: '300px',
//     border: '1px solid #000',
//     padding: '16px',
//     borderRadius: '8px',
//     margin: '0 10px',
//     marginBottom: '20px', // Add margin bottom to separate cards
// });


// const PastBookings = styled(Card)({
//     flex: '1',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center', // Center content vertically
//     alignItems: 'center', // Center content horizontally
//     padding: '2em',
//     borderRadius: '8px',
//     boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
//     marginRight: '1em'
// });

const ContentContainer = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2em',
    alignItems: 'flex-start',
});

// const CalendarContainer = styled('div')({
//     width: '30',
//     maxWidth: '600px',
//     marginLeft: 'auto', 
//     marginTop: '5vh',
//     padding: '8em',
//     borderRadius: '8px',
//     boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
//     paddingTop: '10vh',
// });


// //     return (
// //         <div>
// //             <header>
// //                 <a className="active" href="#Login">Login</a>
// //                 <ProfileImg src={ProfileImg} alt="Host" /> Profile Image
// //             </header>
// //             <div className="container">
// //                 <div className="host-profile">
// //                     <h2>Host Profile</h2>
// //                     <div className="property-selection">
// //                         <Properties onPropertySelection={handlePropertySelection} />
// //                     </div>
// //                     {/* <div className="selected-property">
// //                         {selectedProperty && (
// //                             <div>
// //                                 <img src={selectedProperty.image} alt={selectedProperty.description} />
// //                                 <p>{selectedProperty.description}</p>
// //                             </div>
// //                         )}
// //                     </div> */}
// //                 </div>
// //                 <div className="calendar-container">
// //                     {selectedProperty && <Calendar bookedDates={bookedDates} />}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default HProfile;












// // below this is the orginal code do not delete
// const hprofile = () => {
//      return (
//     <RootContainer>
//         <Header>

//             <a className="active" href="#Login">Login</a>
//             <ProfileImg src={ProfileImg} alt="Host" /> Profile Image
//         </Header>
//         <ContentContainer>

//             <HostPic>
                // <img src={hostimage} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                 <div>This is the Host</div>
//             </HostPic>
         
        
//             <Properties>
//                 <div className="Properties">
//                     <div style={{ display: 'flex'}}>
//                         <Link to ="/Property1">
//                             <PropertyCard>
//                                 <img src={Pad1} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                                 <h3>Property 1</h3>  
//                                 <a href="#">View Property 1</a>
//                             </PropertyCard>
//                         </Link>
//                         {/* <link to="/property1"> */}
//                             <PropertyCard>
//                                 <img src={Pad2} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                                 <h3>Property 2</h3>  
//                                 <a href="#">View Property 1</a>
//                             </PropertyCard>
//                         {/* </link>
//                         <link to="/property1"> */}
//                             <PropertyCard>
//                                 <img src={Pad3} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                                 <h3>Property 3</h3>  
//                                 <a href="#">View Property 1</a>
//                             </PropertyCard>
//                         {/* </link>               */}
//                     </div>
//                 </div>
//             </Properties>
//         </ContentContainer>

//         <ContentContainer>
//             <PastBookings>
//                 <div className="PastBookings">
//                         <div style={{ display: 'flex'}}>
//                             <Link to ="/Property1">
//                                 <PropertyCard>
//                                     <img src={Pad1} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                                     <h3>Property 1</h3>  
//                                     <a href="#">View Property 1</a>
//                                 </PropertyCard>
//                             </Link>
//                             {/* <Link to ="/Property2"> */}
//                                 <PropertyCard>
//                                     <img src={Pad2} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                                     <h3>Property 1</h3>  
//                                     <a href="#">View Property 1</a>
//                                 </PropertyCard>
//                             {/* </Link>
//                             <Link to ="/Property3"> */}
//                                 <PropertyCard>
//                                     <img src={Pad3} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                                     <h3>Property 1</h3>  
//                                     <a href="#">View Property 1</a>
//                                 </PropertyCard>
//                             {/* </Link>
//                             <Link to ="/Property4"> */}
//                                 <PropertyCard>
//                                     <img src={Pad4} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                                     <h3>Property 1</h3>  
//                                     <a href="#">View Property 1</a>
//                                 </PropertyCard>
//                             {/* </Link>
//                             <Link to ="/Property5"> */}
//                                 <PropertyCard>
//                                     <img src={Pad5} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                                     <h3>Property 1</h3>  
//                                     <a href="#">View Property 1</a>
//                                 </PropertyCard>
//                             {/* </Link> */}
//                         </div>
//                     </div>   
//             </PastBookings>


//             <CalendarContainer>
                
//                     <h1>My Calendar</h1>
//                             <Calendar/>

//             </CalendarContainer>

//         </ContentContainer>

    
//     </RootContainer>
// );
//  }

// export default hprofile;
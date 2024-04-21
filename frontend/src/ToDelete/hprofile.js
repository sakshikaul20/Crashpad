// import React from 'react';
// import { styled } from '@mui/material/styles';
// import { Card, Container, dividerClasses } from '@mui/material'; 
// import hostimage from './images/hostimage.jpg';
// import Pad1 from './images/Pad1.jpg';
// import Pad2 from './images/Pad2.jpg';
// import Pad3 from './images/Pad3.jpg';
// import Pad4 from './images/Pad4.jpg';
// import Pad5 from './images/Pad5.jpg';
// // import Calendar from 'react-calendar';




// const RootContainer = styled('div')({
//     height: '100vh',
//     width: '100vw',
      
// });

// // const Header = styled(card)({
// //     width: '100%',
// //     maxWidth: '100%',
// //     marginTop: '10vh',
// //     display: 'flex',
// //     justifyContent: 'right',

// // })


// const HostPic = styled(Card)({
//         width: '100%',
//         maxWidth: '35%',
//         height: '30%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         padding: '2em',
//         borderRadius: '8px', 
//         boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
//         marginLeft: '10%', // Adjust as necessary for your layout
// })


// const Properties = styled(Card)({
//     display: 'inline',

// })
   

// const PropertyCard = styled(Card)({
//     width: '300px',
//     display: 'inline',
//     border: '1px solid #000',
//     padding: '16px',
//     borderRadius: '8px',
//     margin: '0 10px'

// })
 


// const PastBookings = styled(Card)({
//     width: '100%',
//     maxWidth: '60%',
//     height: '30%',
//     display: 'flex',
//     justifyContent: 'left',
//     justifyContent:'space-evenly',
//     padding: '8em',
//     borderRadius: '8px',
//     boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
//     paddingTop: '10vh',
//     marginTop: '5vh',
//     marginLeft: '10vw', // Adjust as necessary for your layout
// });

// const Calendar = styled(Card)({
//     width: '100%',
//     maxWidth: '30%',
//     height: '30%',
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '8em',
//     borderRadius: '8px',
//     boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
//     paddingTop: '10vh',
//     marginTop: '20vh',
//     marginLeft: '50vw', // Adjust as necessary for your layout
// });


// const hprofile = () => {
//  return (
//     <RootContainer>
//         <header>
//             <a class="active" href="#Login">Login</a>
        
//         </header>
        
//         <HostPic>
//             <img src={hostimage} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//             <div>This is the Host</div>
//         </HostPic>
         
        
//         <Properties>
//             <div class="Properties">
//                 <div style={{ display: 'flex'}}>
//                     <div class="PropertyCard">
//                         <img src={Pad1} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                         <h3>Property 1</h3>  
//                         <a href="#">View Property 1</a>       
//                     </div>
//                     <div class="PropertyCard">
//                         <img src={Pad2} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                         <h3>Property 2</h3>         
//                     </div>
//                     <div class="PropertyCard">
//                         <img src={Pad3} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//                         <h3>Property 3</h3>         
//                     </div>
//                 </div>
//             </div>
//         </Properties>

        

        
        
 

//         <PastBookings>
//             <div>This is the past bookings</div>
//             <img src={Pad1} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//             <img src={Pad2} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//             <img src={Pad3} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//             <img src={Pad4} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//             <img src={Pad5} alt="Host" height="300px" width="300px" style={{ alignSelf: 'center'}}/>
//         </PastBookings>


//         <Calendar>
            
//                 <h1>My Calendar</h1>

//         </Calendar>

        

    
//     </RootContainer>
// );
//  }

// export default hprofile;
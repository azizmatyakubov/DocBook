// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "../styles/Checkout.css";
// import Header from "./Header";
// import { AiFillStar, AiFillPhone } from "react-icons/ai";
// import { MdAlternateEmail } from "react-icons/md";
// import { BsBuilding } from "react-icons/bs";

// const Checkout = () => {
//   return (
//     <div className="checkout-wrapper">
//       <Header title={"Checkout"} />
//       <div className="checkout-content">
//         <Container>
//           <Row>
//             <Col md={7}>
//               <div className="checkout-box">
//                 <div className="checkout-box-title">
//                   <h5>Personal Information</h5>
//                 </div>
//                 <div className="checkout-box-inputs">
//                   <Container>
//                     <Row>
//                       <Col md={6}>
//                         <div className="checkout-box-input">
//                           <label>First Name</label>
//                           <input type="text" />
//                         </div>
//                       </Col>
//                       <Col md={6}>
//                         <div className="checkout-box-input">
//                           <label>Last Name</label>
//                           <input type="text" />
//                         </div>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col md={6}>
//                         <div className="checkout-box-input">
//                           <label>Email</label>
//                           <input type="text" />
//                         </div>
//                       </Col>
//                       <Col md={6}>
//                         <div className="checkout-box-input">
//                           <label>Phone</label>
//                           <input type="text" />
//                         </div>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </div>
//               </div>
//               {/* Payment method  */}
//               <div className="checkout-box">
//                 <div className="checkout-box-title">
//                   <h5>Payment method</h5>
//                 </div>
//                 <div className="checkout-box-inputs">
//                   <Container>
//                     <Row>
//                       <Col md={6}>
//                         <div className="checkout-box-input">
//                           <label>Card Number</label>
//                           <input type="text" />
//                         </div>

//                         <div className="checkout-box-input">
//                           <label>Expiration Date</label>
//                           <input type="text" />
//                         </div>
//                       </Col>
//                       <Col md={6}>
//                         <div className="checkout-box-input">
//                           <label>CVV</label>
//                           <input type="text" />
//                         </div>

//                         <div className="checkout-box-input">
//                           <label>Zip Code</label>
//                           <input type="text" />
//                         </div>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </div>
//               </div>
//             </Col>
//             <Col md={5}>
//               <div className="checkout-box">
//                 <div className="checkout-box-title">
//                   <h5>Booking summary</h5>
//                 </div>

//                 <div className="checkout-box-doctor">
//                   <div className="doctor-info-image">
//                     <img
//                       src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
//                       alt="doctor"
//                     />
//                   </div>
//                   <div className="doctor-info-content">
//                     <h3>Dr. Aziz Matyakubov</h3>
//                     <div className="doctor-rating">
//                       <AiFillStar />
//                       <AiFillStar />
//                       <AiFillStar />
//                       <AiFillStar />
//                       <AiFillStar />
//                     </div>
//                     <div className="doctor-specialization">xirurg</div>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

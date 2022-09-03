import React, { useState } from "react";
import "../styles/Profile.css";
import { Button, Modal, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { profileUpdated } from "../features/User/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  // Current user
  const user = useSelector((state) => state.user.user);
  const [profileData, setProfileData] = useState(user);
  console.log(profileData);

  // Modals
  const [show, setShow] = useState(false);
  const [showBio, setShowBio] = useState(false);

  // Modal show/Close for profile
  const handleUpdateProfile = () => {
    handleChange();
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Modal show/Close for bio
  const handleChangeBio = () => {
    handleChange();
    setShowBio(false);
  };
  const handleCloseBio = () => setShowBio(false);
  const handleShowBio = () => setShowBio(true);

  // send put request
  const handleChange = async (e) => {
    let res = await fetch(
      `${process.env.REACT_APP_API_URL}/users/${user._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(profileData),
      }
    );

    if (res.status === 200) {
      dispatch(profileUpdated(profileData));
    } else {
      console.log("error");
    }
  };

  return (
    <>
      {/* Modal for user info */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="name"
                value={profileData.name}
                autoFocus
                onChange={(e) =>
                  setProfileData({ ...profileData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="surname"
                placeholder="surname"
                autoFocus
                value={profileData.surname}
                onChange={(e) =>
                  setProfileData({ ...profileData, surname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label> Speciality</Form.Label>
              <Form.Control
                type="speciality"
                placeholder="speciality"
                autoFocus
                value={profileData.specialization}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    specialization: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateProfile}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for user bio  */}
      <Modal
        show={showBio}
        onHide={handleCloseBio}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Profile update
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({ ...profileData, bio: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBio}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChangeBio}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="profile-wrapper">
        {/* Header text  */}
        <div className="header-text">
          <h1>Profile</h1>
        </div>
        {/* Profile Info  */}
        <div className="profile-info-container">
          <div className="profile-info-container-header">
            <div className="profile-info-image-container">
              <img
                src={user.image}
                alt="profile"
                className="profile-info-image"
              />
            </div>

            <div className="profile-info-text-container">
              <h3 className="profile-info-text">
                {user.name} {user.surname}
              </h3>
              <span className="profile-info-specialty">
                {user.specialization}
              </span>
              <span className="profile-info-text">Poland</span>
            </div>

            <div className="btn btn-secondary profile-btn" onClick={handleShow}>
              Edit
            </div>
          </div>

          {/* Info Body  */}
          <div className="profile-info-container-body">
            <div className="profile-bio-container">
              <div className="profile-bio-container-header">
                <h3 className="profile-bio-title">Profile Bio</h3>
                <div className="btn btn-light" onClick={handleShowBio}>
                  Edit
                </div>
              </div>
              <p className="profile-bio-text">
                {profileData.bio ? profileData.bio : "No bio"}
              </p>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Profile;

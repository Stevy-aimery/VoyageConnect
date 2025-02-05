import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useUser } from "../UserProvider/UserProvider";
import { useNavigate } from "react-router-dom";
import './clientRes.css'

const ClientReservation = () => {
  const { offerId } = useParams();
  const { user } = useUser();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Add this function to handle file input changes
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleReservationSubmit = async () => {
    if (!file || !user?.id || !offerId) {
      alert("Please ensure you're logged in and have selected a file.");
      return;
    }

    const formData = new FormData();
    formData.append("userId", user.id);
    formData.append("offerId", offerId);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/client/reservation",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true
        }
      );
      alert(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error creating reservation:", error);
      if (error.response) {
        // Backend returned an error response (e.g., 400, 500)
        alert(`Failed to create reservation: ${error.response.data}`);
      } else if (error.request) {
        // No response received from the backend
        alert("Failed to create reservation: No response from the server.");
      } else {
        // Something else went wrong
        alert("Failed to create reservation: Please try again later.");
      }
    }

    const plans = [
      {
        name: "Free Plan",
        price: 0,
        description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
        features: [
          "Quam adipiscing vitae proin",
          "Nec feugiat nisl pretium",
          "Nulla at volutpat diam uteera",
        ],
        unavailableFeatures: [
          "Pharetra massa massa ultricies",
          "Massa ultricies mi quis hendrerit",
          "Voluptate id voluptas qui sed aperiam rerum",
          "Iure nihil dolores recusandae odit voluptatibus",
        ],
        delay: 100,
      },
      {
        name: "Business Plan",
        price: 29,
        description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
        features: [
          "Quam adipiscing vitae proin",
          "Nec feugiat nisl pretium",
          "Nulla at volutpat diam uteera",
          "Pharetra massa massa ultricies",
          "Massa ultricies mi quis hendrerit",
          "Voluptate id voluptas qui sed aperiam rerum",
        ],
        unavailableFeatures: ["Iure nihil dolores recusandae odit voluptatibus"],
        delay: 200,
        popular: true,
      },
      {
        name: "Developer Plan",
        price: 49,
        description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
        features: [
          "Quam adipiscing vitae proin",
          "Nec feugiat nisl pretium",
          "Nulla at volutpat diam uteera",
          "Pharetra massa massa ultricies",
          "Massa ultricies mi quis hendrerit",
          "Voluptate id voluptas qui sed aperiam rerum",
          "Iure nihil dolores recusandae odit voluptatibus",
        ],
        unavailableFeatures: [],
        delay: 300,
      },
    ];
  };

  return (
    // Add your reservation form content here
    <>
      
      <div className="reservation-form">
        <h1>Effectuer une reservation</h1>
        

        {/* RIB and money transfer instructions */}
        <div className="company-rib">
          <p>RIB Number: 12345678901234567890123456</p>
          <h3>Envoyez de l'argent à ce RIB et téléchargez le reçu ci-dessous.</h3>
        </div>

        <div className="form-group">
          <label>Télécharger le reçu</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>
        <button
          onClick={handleReservationSubmit}
          className="submit-button"
        >
          Effectuer la reservation
        </button>
      </div>
      {/* Pricing Section */}
    </>
  );
};

export default ClientReservation;
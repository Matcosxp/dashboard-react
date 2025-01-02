/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim

Coded by www.creative-tim.com
=========================================================
*/

// Importazioni necessarie
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth"; // Firebase Authentication
import { auth } from "firebase.js"; // Percorso corretto per il tuo progetto

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

function Cover() {
  const [email, setEmail] = useState(""); // Stato per l'email
  const [message, setMessage] = useState(""); // Stato per il messaggio di feedback

  const handleResetPassword = async (event) => {
    event.preventDefault(); // Previene il comportamento di default del form
    try {
      // Invia email di reset password tramite Firebase
      await sendPasswordResetEmail(auth, email);
      setMessage("Email di reset inviata! Controlla la tua casella di posta.");
    } catch (error) {
      console.error("Errore durante il reset della password:", error.message);
      setMessage("Errore: " + error.message);
    }
  };

  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Inserisci il tuo indirizzo email per ricevere un link di reset
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleResetPassword}>
            <MDBox mb={4}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Reset
              </MDButton>
            </MDBox>
            {message && (
              <MDBox mt={2}>
                <MDTypography variant="button" color="info" textAlign="center">
                  {message}
                </MDTypography>
              </MDBox>
            )}
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;

/**
=========================================================
* Material Dashboard 2 React - Sign Out Page
=========================================================
*/

import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; // Importa Firebase Authentication
import { auth } from "firebase.js"; // Assicurati che il percorso sia corretto

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Utente disconnesso");
      localStorage.removeItem("user"); // Rimuovi eventuali dati salvati
      navigate("/authentication/sign-in"); // Reindirizza alla pagina di login
    } catch (error) {
      console.error("Errore durante la disconnessione:", error.message);
      alert("Errore durante la disconnessione. Riprova.");
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <MDBox
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="success"
        mx={2}
        mt={-3}
        p={3}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Vuoi uscire?
        </MDTypography>
        <MDTypography display="block" variant="button" color="white" my={1}>
          Effettua il logout per terminare la sessione.
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox textAlign="center" mb={2}>
          <MDButton variant="gradient" color="info" fullWidth onClick={handleSignOut}>
            Sì, esci
          </MDButton>
        </MDBox>
        <MDBox textAlign="center">
          <MDButton
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => navigate(-1)} // Torna indietro alla pagina precedente
          >
            Annulla
          </MDButton>
        </MDBox>
      </MDBox>
    </CoverLayout>
  );
}

export default SignOut;

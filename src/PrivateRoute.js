import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "./firebase";

function PrivateRoute({ children, allowedRoles }) {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const db = getFirestore();

    const checkAuthorization = async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (allowedRoles.includes(userData.role)) {
              setIsAuthorized(true);
            } else {
              setIsAuthorized(false);
              setErrorMessage("Non hai l'autorizzazione per accedere a questa pagina.");
            }
          } else {
            setIsAuthorized(false);
            setErrorMessage("Dati utente non trovati.");
          }
        } catch (error) {
          setIsAuthorized(false);
          setErrorMessage("Errore durante il controllo delle autorizzazioni.");
        }
      } else {
        setIsAuthorized(false);
        setErrorMessage("Devi essere autenticato per accedere a questa pagina.");
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      checkAuthorization(user);
    });

    return () => unsubscribe();
  }, [allowedRoles]);

  if (isAuthorized === null) {
    return <div>Caricamento...</div>;
  }

  if (isAuthorized === false) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Accesso Negato</h2>
        <p>{errorMessage}</p>
        <a href="/authentication/sign-in">Torna al Login</a>
      </div>
    );
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired, // Accetta un array di ruoli
};

export default PrivateRoute;

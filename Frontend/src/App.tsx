import { useState } from "react";
import Header from "./components/Header";
import FormateurForm from "./components/Formateurfrom";
import Message from "./components/Message";

function App() {
  const [formateurs, setFormateurs] = useState([
    {
      nom: "Badji",
      prenom: "Ousseynou",
      email: "ousseynou@gmail.com",
    },
    {
      nom: "Diop",
      prenom: "Moussa",
      email: "moussa@gmail.com",
    },
    {
      nom: "Ndiaye",
      prenom: "Fatou",
      email: "fatou@gmail.com",
    },
    {
      nom: "Fall",
      prenom: "Abdou",
      email: "abdou@gmail.com",
    },
  ]);

  return (
    <div>
      <Header />
      <FormateurForm
  onAjouter={(nouveauFormateur) =>
    setFormateurs([...formateurs, nouveauFormateur])
  }
/>

      {formateurs.map((formateur) => (
        <Message
          key={formateur.email}
          nom={formateur.nom}
          prenom={formateur.prenom}
          email={formateur.email}
          onSupprimer={() =>
            setFormateurs(
              formateurs.filter((f) => f.email !== formateur.email)
            )
          }
          onModifier={() => {
  const nouveauNom = prompt("Nouveau nom :", formateur.nom);
  const nouveauPrenom = prompt("Nouveau prénom :", formateur.prenom);
  const nouvelEmail = prompt("Nouvel email :", formateur.email);

  if (
    nouveauNom === null ||
    nouveauPrenom === null ||
    nouvelEmail === null
  ) {
    return;
  }

  setFormateurs(
    formateurs.map((f) =>
      f.email === formateur.email
        ? {
            ...f,
            nom: nouveauNom,
            prenom: nouveauPrenom,
            email: nouvelEmail,
          }
        : f
    )
  );
}}
        />
      ))}
    </div>
  );
}

export default App;
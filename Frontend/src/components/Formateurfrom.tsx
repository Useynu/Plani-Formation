import { useState } from "react";

type FormateurFormProps = {
  onAjouter: (formateur: {
    nom: string;
    prenom: string;
    email: string;
  }) => void;
};

function FormateurForm({ onAjouter }: FormateurFormProps) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Ajouter un formateur</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          onAjouter({ nom, prenom, email });

          setNom("");
          setPrenom("");
          setEmail("");
        }}
      >
        <input
          type="text"
          placeholder="Nom du formateur"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />

        <input
          type="text"
          placeholder="Prénom du formateur"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
        />

        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default FormateurForm;
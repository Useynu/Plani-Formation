type MessageProps = {
  nom: string;
  prenom: string;
  email: string;
  onSupprimer:()=>void;
  onModifier: () => void;
};

function Message({
  nom,
  prenom,
  email,
  onSupprimer,
  onModifier,
  }: MessageProps) {
  return (
    <div>
      <h3>{nom} {prenom}</h3>
      <p>Email : {email}</p>
      <button onClick={onSupprimer}>
            supprimer 
      </button>
      <button onClick={onModifier}>Modifier</button>
    </div>
  );
}

export default Message;
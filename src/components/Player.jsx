import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editedplayer = <span className="player-name">{playerName}</span>;
  let btnCaption = "EDIT";
  if (isEditing) {
    editedplayer = (
      <input type="text" required value={playerName} onChange={handleChange} />
      //this is two way binding value ,from onChange we get the val and to value we are giving
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editedplayer}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

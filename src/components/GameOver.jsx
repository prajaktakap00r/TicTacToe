export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER!</h2>
      {winner && <p>Winner Is {winner}</p>}
      {!winner && <p>It's a Draw</p>}
      <button onClick={onRestart}>REMATCH</button>
    </div>
  );
}

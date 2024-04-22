import "./Card.css";

function Card({ name, likes, addLikes, removeCard, removeLikes }) {
  return (
    <div className="container">
      <div className="card_item">
        <img src={`https://source.unsplash.com/400x400/?${name}`} />

        <button onClick={addLikes}>
          <span className="material-symbols-outlined">heart_plus</span>
        </button>
        <p>{likes}</p>

        <button onClick={removeLikes}>
          <span className="material-symbols-outlined">heart_minus</span>
        </button>
        <button onClick={removeCard}>
          <span className="material-symbols-outlined">cancel</span>
        </button>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default Card;

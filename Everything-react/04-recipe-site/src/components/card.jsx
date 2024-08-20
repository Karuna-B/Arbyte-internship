export default function Card({ recipe }) {
  const { image, name, tag, numberOfMinutes } = recipe;
  return (
    <div className="card" key={recipe.id}>
      <img src={image} alt="" />

      <div className="card-content">
        <h3> {name} </h3>
        <div className="card-info">
          <div className="tag">
            <p>{tag}</p>
          </div>
          <p className="time-text">{numberOfMinutes}</p>
        </div>
      </div>
    </div>
  );
}

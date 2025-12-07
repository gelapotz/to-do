export function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.content}</p>
    </div>
  );
}

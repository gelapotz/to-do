export function Card({ image, title, subtitle, content }) {
  const fallbackImage = "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="card">
      <img src={image || fallbackImage} alt={title || "Card image"} />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{content}</p>
    </div>
  );
}

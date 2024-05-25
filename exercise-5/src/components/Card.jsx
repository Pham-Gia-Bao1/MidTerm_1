export default function Card({ data }) {
  return (
    <div class="card">
      <h4>{data.name}</h4>
      <small>{data.age}</small>
      <p>
        {data.description}
      </p>
      <img src={data.image.src} alt={data.image.alt} />
    </div>
  );
}

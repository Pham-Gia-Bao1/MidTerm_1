export default function Place({data}) {
  return (
    <li key={data.id} className="place-item">
      <button>
        <img src={data.image.src} alt={data.image.alt}/>
        <h3>{data.title}</h3>
      </button>
    </li>
  );
}

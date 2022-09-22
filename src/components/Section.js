export default function Section(props) {
  return (
    <section>
      <img src={props.item.imageUrl} />
      <div className="container">
        <i class="fa-solid fa-location-dot"></i>
        <span className="section--location">{props.item.location}</span>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        <h1 className="section--title">{props.item.title}</h1>
        <h3>
          {props.item.startDate}-{props.item.endDate}
        </h3>
        <p>{props.item.description}</p>
      </div>
    </section>
  );
}

function CoreCard({ card }) {
  return (
    <>
      <div className="core-card" data-aos="fade-right">
        <div className="card-img">
          <img src={card.image} alt="" />
        </div>

        <div className="card-detail">
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      </div>
    </>
  );
}

export default CoreCard;

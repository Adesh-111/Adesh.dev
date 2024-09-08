function CoreCard({ card }) {
    return (
        <>
            <div className="core-card">
                <img src={card.image} alt="" />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
            </div>
        </>
    );
}

export default CoreCard;
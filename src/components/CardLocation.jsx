const CardLocation = ({dataApi}) => {

    return (
        <section className="card_location_info">
            <h1>{dataApi?.name}</h1>
            <ul className="card_list">
                <div className="card_list_info">
                    <li>Type: </li>
                    <p>{dataApi?.type}</p>
                </div>
                <div className="card_list_info">
                    <li>Dimension: </li>
                    <p>{dataApi?.dimension}</p>
                </div>
                <div className="card_list_info">
                    <li>Population: </li>
                    <p>{dataApi?.residents.length}</p>
                </div>
            </ul>
        </section>
    )
}

export default CardLocation
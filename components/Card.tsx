import "./Card.css"

type CardProps = {
    title: string;
    img: string;
};

function Card(params : CardProps) {
    return (
        <div className="card">
            <div>
                <img className="" src={params.img}></img>
            </div>
            <div className="informazioni">
                <p>{params.title}</p>
                <a href="#" className="text-blue-400 text-sm">Approfondisci</a>
            </div>
        </div>
    )
}

export default Card
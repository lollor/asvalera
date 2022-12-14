import "./Card.css"

type CardProps = {
    title: string;
    img: string;
    added_date: string;
    horizontal?: boolean;
    col_start?: number;
    col_end?: number;
    classes?: string;
};

function Card(params : CardProps) {
    return (
        <div className="card">
            <div className="image-container">
                <img className="" src={params.img}></img>
            </div>
            <div className="informazioni">
                <h3>{params.title}</h3>
                <p>{params.added_date}</p>
            </div>
        </div>
    )
}

export default Card
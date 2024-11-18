import Image from "next/image";
import "./Card.css"

type CardProps = {
    title: string;
    img: string;
    added_date: Date;
    horizontal?: boolean;
    col_start?: number;
    col_end?: number;
    classes?: string;
};

function Card(params : CardProps) {
    return (
        <div className="card">
            <div className="image-container">
                <Image priority alt={params.title} style={{objectFit:'contain'}} fill src={params.img} />
            </div>
            <div className="informazioni">
                <h2>{params.title}</h2>
                {/* <p>{new Date(params.added_date).toLocaleDateString('it-IT')}</p> */}
            </div>
        </div>
    )
}

export default Card
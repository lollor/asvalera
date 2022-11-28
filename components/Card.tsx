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
        <div className={`card ${params.horizontal ? "col-span-2":""} ${params.col_start !== undefined ? `col-start-${params.col_start}`:""} ${params.classes}`}>
            <div className={`image-container ${params.horizontal ? "sm:h-[200px] md:h-[300px] lg:h-[400px]":""}`}>
                <img className="" src={params.img}></img>
            </div>
            <div className="informazioni">
                <h3>{params.title}</h3>
                <p>Aggiunto il {params.added_date}</p>
            </div>
        </div>
    )
}

export default Card
import "./style.css";

export default function Place({ data }) {
    let photo;

    if (data.photos) {
        photo = data.photos[0].getUrl();
    }

    return (
        <div className="place-card">
            <div className="place-info-base place-info-line">
                <div className="place-info-base">
                    <img
                        alt="icon"
                        src={data.icon}
                        width={12}
                        height={12}
                        style={{ marginRight: 5 }}
                    />
                    <p className="place-name">{data.name}</p>
                </div>
                {data.rating ? (
                    <p>
                        {data.rating} {String.fromCharCode(9733)}
                    </p>
                ) : null}
            </div>
            <div className="place-img-container">
                {photo ? (
                    <img alt={data.name} src={photo} className="place-img" />
                ) : (
                    <div className="place-img">
                        <p>No Photo</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export function CreateStaticPost (props){
    const {user, cardText, imgURL, alt, date} = props;

    return(
        <div className="container posts">
            <div className="card border-light mb-3 mt-5 post">
            <div className="card-body">
                <img src={imgURL} className="card-img-top" alt={alt}/>

                <div className="card-body-text">
                    <div className="card-title"> <small className="text-muted">{user}</small></div>
                    <div className="card-text">{cardText}</div>
                    <a href="" className="btn">❤️</a>
                    <a href="" className="btn">💬</a>
                    <div className="card-footer bg-transparent"></div>
                    <p className="card-text"><small className="text-muted">{date}</small></p>
                </div>
            </div>
        </div>
    </div>
    );
}
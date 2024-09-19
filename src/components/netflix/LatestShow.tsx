interface LatestShowProps {
  title: string;
  thumnailUrl: string;
  category: string;
  publishedOn: string;
  children: string; 
}

const LatestShow = (props: LatestShowProps) => {

  

  return (
    <div className="card">
      <img src={props.thumnailUrl} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="badge rounded-pill text-bg-warning">
            {props.category}
          </span>
        </li>
        <li className="list-group-item fst-italic">{props.publishedOn}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-primary">Watch now</button>
      </div>
    </div>
  );
};

export default LatestShow;

interface RecommendedShowProps {
  id: number;
  title: string;
  description: string;
  category: string;
  publishedOn: string;
  thumbnailUrl: string;
  isInWatchlist: boolean;
  index: number;
  handleManageWatchlist: (index: number) => void;
}

const RecommendedShow: React.FC<RecommendedShowProps> = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
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
     
        <button
          className="btn btn-success ms-2"
          onClick={() => props.handleManageWatchlist(props.index)}>
          {props.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default RecommendedShow;

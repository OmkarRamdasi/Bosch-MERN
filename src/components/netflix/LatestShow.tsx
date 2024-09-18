interface LatestShowProps {
  title: string;
  thumnailUrl: string;
  category: string;
  publishedOn: string;
  children: string; 
}

const LatestShow = (props: LatestShowProps) => {
  // receiving the data from parent component
  console.log(props);

  /* props
   * props are passed to child component
   * props are object
   * props are read-only.
   */

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

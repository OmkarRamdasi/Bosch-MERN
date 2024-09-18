interface TrendingShowProps {
  title: string;
  description: string;
}

const TrendingShow = (props: TrendingShowProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
         {props.description}
        </p>
        <button className="btn btn-primary">Watch now</button>
      </div>
    </div>
  );
};

export default TrendingShow
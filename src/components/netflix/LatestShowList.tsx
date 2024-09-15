import LatestShow from "./LatestShow";

const LatestShowList = () => {

  return (
    <div className="row">
      <div className="col-sm-3">
        <LatestShow
          title="Berlin"
          thumnailUrl="https://placehold.co/400x300/ffff00/000000/png"
          category="Thriller"
          publishedOn="yesterday"
        >
          lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil
          adipisci perferendis unde architecto quisquam blanditiis commodi
        </LatestShow>
      </div>
      <div className="col-sm-3">
        <LatestShow
          title="Money Heist"
          thumnailUrl="https://placehold.co/400x300/ff0000/000000/png"
          category="Thriller"
          publishedOn="2 days ago"
        >
          consectetur adipisicing elit. sgfdd dfgdgfh blanditiis Harum nihil
          adipisci perferendis unde architecto quisquam blanditiis commodi
          testing wow
        </LatestShow>
      </div>
      
    </div>
  );
};

export default LatestShowList;

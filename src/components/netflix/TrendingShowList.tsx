import { useState } from "react";
import TrendingShow from "./TrendingShow";

interface Show {
  title: string;
  description: string;
}

const TrendingShowList = () => {
  /* States
   * component-wide updateable data
   * whenever you update the state data,
   * the component will re-render and show the updated data in UI
   * never update the state directly; instead use setter function
   */
  const [resolution, setResolution] = useState<string>("HD");
  const [trendingShows, setTrendingShows] = useState<Show[]>([
    {
      title: "The Godfather",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
    },
    {
      title: "The Dark Knight",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
    },
    {
      title: "The Lord of the Rings",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
    }
  ]);

  // event handler function
  const handleChangeResolution = () => {
    setResolution("4K");
  };

  return (
    <div className="row">
      <h4>
        Enjoy watching the shows in {resolution}
        <button
          className="btn btn-secondary btn-sm ms-2"
          onClick={handleChangeResolution}
        >
          Change Resolution
        </button>
      </h4>
      <div className="col-sm-4 mb-3 mb-sm-0">
        <TrendingShow {...trendingShows[0]} />
      </div>
      <div className="col-sm-4 mb-3 mb-sm-0">
        <TrendingShow {...trendingShows[1]} />
      </div>
      <div className="col-sm-4 mb-3 mb-sm-0">
        <TrendingShow {...trendingShows[2]} />
      </div>
    </div>
  );
};

export default TrendingShowList;

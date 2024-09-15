import { useState } from "react";
import RecommendedShow from "./RecommendedShow"

const RecommendedShowList = () => {

  // state 
  const [recommendedShows, setRecommendedShows] = useState([
    {
      id: 567346574,
      title: "The Planet Earth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
      category: "Infotainment",
      publishedOn: "2 days ago",
      thumbnailUrl: "https://placehold.co/400x300/ffff00/000000/png",
      isInWatchlist: true,
    },
    {
      id: 567567567,
      title: "The Planet of the Apes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
      category: "Action",
      publishedOn: "2 days ago",
      thumbnailUrl: "https://placehold.co/400x300/ff0000/000000/png",
      isInWatchlist: false,
    },
    {
      id: 567567568,
      title: "Ancient Aliens",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
      category: "Documentary",
      publishedOn: "2 days ago",
      thumbnailUrl: "https://placehold.co/400x300/00ff00/000000/png",
      isInWatchlist: false,
    },
  ]);

  // conditional rendering outside JSX
  if (recommendedShows && recommendedShows.length === 0) { 
    return (
      <div className="alert alert-warning">
        Sorry! Unable to find any recommended shows. Please try again later.
      </div>
    );
  }

  // event handler function
  const handleManageWatchlist = (index: number) => {
    console.log(index);
    // updating the state immutably
    const duplicateShows = [
      ...recommendedShows
    ]
    duplicateShows[index].isInWatchlist = !duplicateShows[index].isInWatchlist;
    
    // update the state -- specifically the isInWatchlist property
    setRecommendedShows([...duplicateShows]);
  }

  return (
    <div className="row">
      {/* Lists & Keys  */}
      {recommendedShows.map((show, index) => {
        console.log("rendering");
        return (
          <div className="col-sm-3" key={show.id}>
            <RecommendedShow
              {...show}
              index={index}
              handleManageWatchlist={handleManageWatchlist}
            />
          </div>
        );
      })}
     
    </div>
  );
}

export default RecommendedShowList
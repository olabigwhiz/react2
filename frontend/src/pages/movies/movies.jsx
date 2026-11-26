import { useNavigate } from "react-router-dom";
import { useData } from "../../context/dataContext";
function Movies() {
  const {data} = useData();
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <div className="w-full my-7 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold pb-5">Movie Hub/ Night Tickecting Center</h1>
        <div className="flex flex-row flex-wrap justify-center gap-4 w-full">
          {data?.map((item, index) => (
          <div key={item.Title} onClick={() => navigate(`/movies/${encodeURIComponent(item.Title)}`)}>
            <img src={item.Poster} alt={item.Title} />
            <p>{item.Title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Movies;

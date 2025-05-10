import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, rating, total_view, tags } = news;

  // Format the date to match the design
  const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

  // Calculate the number of full stars to display
  const fullStars = Math.floor(rating.number);

  return (
    <div className="card bg-white border border-base-200">
      {/* Author section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={author.img || "/placeholder.svg"} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-accent">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-ghost btn-circle btn-sm">
            <FaRegBookmark className="text-accent" />
          </button>
          <button className="btn btn-ghost btn-circle btn-sm">
            <FaShareAlt className="text-accent" />
          </button>
        </div>
      </div>

      {/* Title section */}
      <div className="p-4 pt-2">
        <h2 className="text-xl font-bold text-primary mb-4">{title}</h2>
      </div>

      {/* Image section */}
      <figure className="px-4">
        <img
          src={thumbnail_url || "/placeholder.svg"}
          alt={title}
          className="w-full h-56 object-cover rounded-sm"
        />
      </figure>

      {/* Tags and metadata section */}
      <div className="p-4">
        <div className="text-sm text-accent mb-2">
          {format(new Date(author.published_date), "EEEE, MMMM d, yyyy")} |
          <span className="ml-1">Tags: </span>
          {tags.map((tag, index) => (
            <span key={index} className="capitalize">
              {tag}
              {index < tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>

        {/** Details */}
        <div className="text-gray-700 mt-4">
          {news.details.length > 200 ? (
            <>{news.details.slice(0, 200)}...</>
          ) : (
            news.details
          )}
        </div>

        {/* Read more link */}
        <div className="my-4">
          <a href="#" className="text-orange-500 hover:underline">
            Read More
          </a>
        </div>

        <hr className="text-base-300" />

        {/* Rating and views */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < fullStars ? "text-amber-400" : "text-base-300"
                } w-4 h-4`}
              />
            ))}
            <span className="ml-2 text-gray-600">{rating.number}</span>
          </div>
          <div className="flex items-center">
            <FaEye className="text-gray-500 mr-2" />
            <span className="text-gray-600">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

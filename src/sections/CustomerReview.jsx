import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers </span>Say?
      </h3>
      <p className="info-text m-auto mt-8 max-w-lg text-center">
        Hear geniune stories from our satified customers about their exceptional
        experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;

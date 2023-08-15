import Review, { ReviewProps } from "./Review";

export interface ReviewListProps {
  reviews: ReviewProps[];
}

const ReviewList: React.FC<ReviewListProps> = ({ ...prop }) => {
  const listItems = prop.reviews.map((item, index) => (
    <Review
      key={index.toString()}
      index={index + 1}
      comment={item.comment}
      id={item.id}
    />
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "16px",
        width: "100%",
      }}
    >
      {listItems}
    </div>
  );
};

export default ReviewList;

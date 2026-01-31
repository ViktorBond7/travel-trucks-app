import { useOutletContext } from "react-router-dom";
import css from "./Reviews.module.css";
import BookCamper from "../BookCamper/BookCamper";
import SvgIcon from "../SvgIcon/SvgIcon";
import clsx from "clsx";

const Reviews = () => {
  const reviews = useOutletContext();

  return (
    <>
      <div className={css.containerReviews}>
        {reviews && (
          <div className={css.description}>
            <ul className={css.list}>
              {reviews.reviews.map((review, i) => {
                return (
                  <li className={css.item} key={i}>
                    <div className={css.containerTop}>
                      <div className={css.box}>{review.reviewer_name[0]}</div>
                      <div className={css.boxRight}>
                        <p>{review.reviewer_name}</p>
                        <div>
                          {Array.from({ length: 5 }, (_, i) => (
                            <SvgIcon
                              key={i}
                              id="icon-rating"
                              width="16"
                              height="16"
                              className={clsx(
                                css.iconRating,
                                i < Math.round(review.reviewer_rating) &&
                                  css.iconHasRating,
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div>
          <BookCamper />
        </div>
      </div>
    </>
  );
};

export default Reviews;

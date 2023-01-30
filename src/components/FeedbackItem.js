import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem(props) {
  const { item } = props;
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text} </div>
    </Card>
  );
}

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;

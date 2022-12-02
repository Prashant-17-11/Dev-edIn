import Moment from "react-moment";

function formatDate(date) {
  return <Moment format='YYYY/MM/DD'>{date}</Moment>;
}

export default formatDate;

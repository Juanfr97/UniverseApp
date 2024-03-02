import { IconContext } from "react-icons";
import PropTypes from "prop-types";

export const DetailCard = ({ icon: Icon, description }) => {
  return (
    <div className="card detail-card">
      <div className="card-body">
        <IconContext.Provider value={{ className: "global-class-name", size: "1.5em" }}>
          <div className="detail-icon">
            <Icon />
          </div>
        </IconContext.Provider>
        <div className="detail-description">
          {description}
        </div>
      </div>
    </div>
  );
}

DetailCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  description: PropTypes.string.isRequired
};

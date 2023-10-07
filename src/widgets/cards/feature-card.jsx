import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function FeatureCard({ icon, title, description }) {
  return (
    <Card className="w-15 rounded-2xl shadow-2xl">
      <CardBody className="px-4 text-center">
        <img 
          src={icon} 
          alt={title} 
          className="mb-6 w-12 h-12 mx-auto" // 크기는 필요에 따라 조정하세요.
        />
        <Typography variant="h3" color="blue-gray" className="">
          {title}
        </Typography>
        <Typography className="font-normal text-blue-gray-600 descriptionText">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;

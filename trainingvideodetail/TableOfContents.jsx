import React from "react";
import "./trainingvideodetail.css";
import { Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const TableOfContents = ({ item, onVideoClick }) => {
  const introClick = (videoUrl) => {
    onVideoClick(videoUrl);
  };

  return (
    <React.Fragment>
      <Col>
        <Card
          key={item.id}
          className="video-card"
          onClick={() => introClick(item.mediaUrl)}
        >
          <div className="card-title">{item.title}</div>
        </Card>
      </Col>
    </React.Fragment>
  );
};

TableOfContents.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    mediaUrl: PropTypes.string,
  }).isRequired,

  onVideoClick: PropTypes.func,
};

export default TableOfContents;
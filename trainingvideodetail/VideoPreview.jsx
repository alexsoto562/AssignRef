import React from "react";
import PropTypes from "prop-types";
import "./trainingvideodetail.css";
import NoteSection from "./NoteSection";

const VideoPreview = ({ video }) => {
  return (
    <React.Fragment>
      <div className="ratio ratio-16x9">
        <iframe
          src={video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gryoscrope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <NoteSection />
    </React.Fragment>
  );
};

VideoPreview.propTypes = {
  video: PropTypes.string.isRequired,
};

export default VideoPreview;

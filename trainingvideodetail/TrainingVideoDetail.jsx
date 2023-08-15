import React, { useState, useEffect } from "react";
import TableOfContents from "./TableOfContents";
import TitleHeader from "components/general/TitleHeader";
import VideoPreview from "./VideoPreview";
import { Col, Row } from "react-bootstrap";
import "./trainingvideodetail.css";
import debug from "sabio-debug";
import videoService from "../../services/videoService";
const _logger = debug.extend("TrainingVideoDetail");

const TrainingVideoHomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const [videoData, setVideoData] = useState({
    pageIndex: 0,
    pageSize: 20,
    current: "",
    videoArray: [],
    videoComponents: [],
  });

  useEffect(() => {
    videoService
      .getVideos(videoData.pageIndex, videoData.pageSize)
      .then(onGetVideosSuccess)
      .catch(onGetVideosError);
  }, []);

  const onGetVideosSuccess = (response) => {
    let responseVideoArray = response.item.pagedItems;

    setVideoData((prevState) => {
      const videoData = { ...prevState };
      videoData.videoArray = responseVideoArray;
      videoData.videoComponents = responseVideoArray.reverse().map(mapVideos);
      return videoData;
    });
  };

  const onGetVideosError = (response) => {
    _logger("error is firing", response);
  };

  const mapVideos = (aVideo) => {
    return (
      <TableOfContents
        item={aVideo}
        key={"list" + aVideo.id}
        onVideoClick={() => handleItemClick(aVideo.mediaUrl)}
      />
    );
  };

  const handleItemClick = (vid) => {
    setCurrentVideo(vid);
  };

  return (
    <React.Fragment>
      <TitleHeader
        title="Training Videos"
        buttonText="Add Video"
        buttonLink="/videos/add"
      />
      <Row className="col-md-12">
        <Col md={4} lg={3}>
          <div className="">{videoData.videoComponents}</div>
        </Col>

        <Col md={7} lg={9} className="card">
          <div className="training-video-player card">
            {currentVideo && <VideoPreview video={currentVideo} />}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TrainingVideoHomePage;

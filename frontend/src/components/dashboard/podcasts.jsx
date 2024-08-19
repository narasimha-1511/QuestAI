import React from "react";
import PodcastCard from "./podcast-card";
import RSSFeedIcon from "../../assets/icons/rss-feed.svg";
import UploadIcon from "../../assets/icons/upload.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";

const Podcasts = ({ handleModal }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Add Podcast</h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        <PodcastCard
          title="RSS Feed"
          description="Lorem ipsum dolor sit. Dolor lorem sit."
          icon={RSSFeedIcon}
          onClick={handleModal}
        />
        <PodcastCard
          title="Youtube Video"
          description="Lorem ipsum dolor sit. Dolor lorem sit."
          icon={YoutubeIcon}
          onClick={handleModal}
        />
        <PodcastCard
          title="Upload Files"
          description="Lorem ipsum dolor sit. Dolor lorem sit."
          icon={UploadIcon}
          onClick={handleModal}
        />
      </div>
    </>
  );
};

export default Podcasts;

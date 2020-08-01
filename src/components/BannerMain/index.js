import React from 'react';
import PropTypes from 'prop-types';

import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>

        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive iframeTitle={videoTitle} youtubeID={youTubeID} />
          <WatchButton>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Assistir
            </a>
          </WatchButton>
        </ContentAreaContainer.Item>

      </ContentAreaContainer>
    </BannerMainContainer>
  );
}

BannerMain.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoDescription: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
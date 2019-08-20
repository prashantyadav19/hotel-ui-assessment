import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const Gallery = ({
  isOpen,
  activeSrc,
  nextSrc,
  prevSrc,
  onCloseRequest,
  onMovePrevRequest,
  onMoveNextRequest
}) => (
  <div>
    {isOpen && (
      <Lightbox
        mainSrc={activeSrc}
        nextSrc={nextSrc}
        prevSrc={prevSrc}
        onCloseRequest={onCloseRequest}
        onMovePrevRequest={onMovePrevRequest}
        onMoveNextRequest={onMoveNextRequest}
      />
    )}
  </div>
);

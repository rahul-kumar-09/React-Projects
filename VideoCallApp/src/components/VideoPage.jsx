import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();

  const roomID = getUrlParams().get("roomId") || randomId(5);
  let myMetting = async (element) => {
    const appID = "1399011601";
    const serverSecret = "7a8d610403cd04f5506f0cad3d305b61";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString,
      "user"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal Link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div ref={myMetting}>
      <h1>Video page {id}</h1>
    </div>
  );
};

export default VideoPage;

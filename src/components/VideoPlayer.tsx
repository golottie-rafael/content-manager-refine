import { DefaultUi, Hls, Player } from "@vime/react";

type VideoPlayerProps = {url: string}

export const VideoPlayer: React.FC<VideoPlayerProps> = props => 
<Player>
    <Hls version="latest">
        <source data-src={props.url} type="application/x-mpegURL" />
    </Hls>
    <DefaultUi />
</Player>
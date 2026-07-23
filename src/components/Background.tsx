interface BackgroundProps {
    videoURL: string;
}

function Background({videoURL}: BackgroundProps) {
    return (
        <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
            <source src={videoURL} type="video/mp4" />
        </video>
    )
}

export default Background;
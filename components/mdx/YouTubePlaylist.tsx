export default function YouTubePlaylist({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/videoseries?list=${id}`}
        title="YouTube Playlist Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
}

// components/mdx/Spotify.tsx
export default function Spotify({ uri }: { uri: string }) {
  return (
    <div>
      <iframe
        style={{ borderRadius: "12px" }}
        src={`https://open.spotify.com/embed/${uri}`}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}

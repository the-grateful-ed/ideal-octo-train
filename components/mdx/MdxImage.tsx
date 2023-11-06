import Image from "next/legacy/image"

function CustomImage({ src, alt, ...props }) {
  return (
    <div className="ju mx-auto flex w-[10rem] rounded-2xl p-10">
      <Image
        src={src}
        width={300}
        height={100}
        layout="responsive"
        alt={alt}
        {...props}
        className="rounded-2xl"
      />
    </div>
  )
}
export default CustomImage

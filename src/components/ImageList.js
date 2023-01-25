import ImageShow from "./ImageShow";
import "./ImageList.css"

const ImageList = ({ image }) => {
    const renderedImages = image.map((image, index) => {
        return <ImageShow key={index} image={image} />
    })

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
}

export default ImageList
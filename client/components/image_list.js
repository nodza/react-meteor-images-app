// Create image list component
// 1. Import React
import React from 'react';
import ImageDetail from './image_detail'

// 2. Create the component
const ImageList = (props) => {
    // Filter out image albums
    const validImages = props.images.filter(image => !image.is_album)

    // Render the filtered images
    const RenderedImages = validImages.map(image =>
        <ImageDetail key={image.title} image={image} />
    );
    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    )
}

// 3. Export the component
export default ImageList;
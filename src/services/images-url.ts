import { ImageDimensions } from "@/types/CroppedImageUrl";

const getCroppedImageUrl = (url: string, dimensions: ImageDimensions = { height: 400, width: 600}) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    
    // index represents the starting position of media parameter.
    return url.slice(0, index) + `crop/${dimensions.width}/${dimensions.height}/` + url.slice(index); 
}

export default getCroppedImageUrl;
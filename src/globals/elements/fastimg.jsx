import { publicUrlFor } from "../constants";

function FastImage(props) {
    return (
        <>
            <img {...props} src={publicUrlFor(props.src)} alt={props.alt} />
        </>
    )
}
export default FastImage;
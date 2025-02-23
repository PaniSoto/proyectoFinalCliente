import ImagenHombre from "./ImagenHombre";
import ImagenMujer from "./ImagenMujer";

function SeccionHombreMujer() {
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <ImagenHombre />
                </div>
                <div>
                    <ImagenMujer />
                </div>
            </div>
        </div>
    );
}

export default SeccionHombreMujer;
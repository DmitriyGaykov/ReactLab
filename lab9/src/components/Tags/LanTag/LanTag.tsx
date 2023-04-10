import ITag from "../ITag";
import './lanTag.scss';

const LanTag = ({ text } : ITag) => {
    return (
        <div className="tag">
            { text ?? "" }
        </div>
        );
}

export default LanTag;
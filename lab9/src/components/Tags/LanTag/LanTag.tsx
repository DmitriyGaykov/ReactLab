import ITag from "../ITag";
import './lanTag.scss';

const LanTag = ({ text, onClick } : ITag) => {

    onClick ??= () => {};

    return (
        <div onClick={() => onClick()} className="tag">
            { text ?? "" }
        </div>
        );
}

export default LanTag;
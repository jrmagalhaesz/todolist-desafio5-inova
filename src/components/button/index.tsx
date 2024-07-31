import { FaTrashAlt } from "react-icons/fa";
import IconButton from "./styles";

type Props = {
    onClick: () => void;
    disabled: boolean;
}

const DeleteButton = ({ onClick, disabled }: Props) => {
    return (
        <IconButton onClick={onClick} disabled={disabled}>
            <FaTrashAlt />
        </IconButton>
    )
}

export default DeleteButton;

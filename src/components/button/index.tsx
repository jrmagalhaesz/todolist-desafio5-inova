import React from "react"
import { FaTrashAlt } from "react-icons/fa";

import IconButton from "./styles"


type Props = {

    onClick: () => void
}


const DeleteButton = ({onClick}:Props)=>{
    return (

        <IconButton onClick={onClick}>
            <FaTrashAlt />
      </IconButton>
    )
}


export default DeleteButton
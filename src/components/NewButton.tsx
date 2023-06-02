import React, {FC} from "react";


interface componentButton extends React.HTMLAttributes<HTMLButtonElement> {
    // custom properties go here
    disabled?: boolean;
}

const NewButton: FC<componentButton> = ({disabled: boolean, ...props   }) => {
    return(
        <button>
            Cool button
        </button>
    )
}

export default NewButton
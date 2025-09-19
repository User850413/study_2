import { useCallback, useEffect, useState } from "react";
import "./IconButton.scss"
import clsx from "clsx";

const IconButton = ({areaLabel, icon, size, isActivable=false, onClick}) => {
    const [ isActive, setIsActive ] = useState(false);

    if (!areaLabel) console.warn("areaLabel should be added")
    if (!size) size = "md"
    if (!icon) console.error("no icon provided");
    if (!isActivable && !onClick) onClick = () => { console.log("btn clicked but nothing happend") }
    if (onClick && typeof onClick !== "function") console.error("onClick's type must be function");

    // 추가된 onClick
    const addedOnClick = onClick;

    const handleClick = useCallback(() => {
        if(typeof addedOnClick === 'function'){
            addedOnClick();
        }else if(!isActivable){
            console.log("btn clicked but no onClick provided");
        }

        if(isActivable) setIsActive(prev => !prev);
    }, [addedOnClick, isActivable])

    return (
        <button 
            aria-label={areaLabel} 
            onClick={handleClick}
            className={clsx(
                "iconBtn",
                size,
                isActivable && isActive && "active",
            )}
            >            
            {icon}
        </button>
    );
};

export default IconButton;
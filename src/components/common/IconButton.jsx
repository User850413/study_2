import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

const IconButton = (props) => {
    let { areaLabel, icon, size, isActivable=false, onClick, activeState=false, name, ...btnProps } = props;

    const [ isActive, setIsActive ] = useState(activeState);

    if (!areaLabel) console.warn("areaLabel should be added")
    if (!size) size = "md"
    if (!icon) console.error("no icon provided");
    if (!isActivable && !onClick) onClick = () => { console.log("btn clicked but nothing happend") }
    if (onClick && typeof onClick !== "function") console.error("onClick's type must be function");

    // 추가된 onClick
    const addedOnClick = onClick;

    const handleClick = useCallback((e) => {
        if(typeof addedOnClick === 'function'){
            addedOnClick(e);
        }else if(!isActivable){
            console.log("btn clicked but no onClick provided");
        }

        if(isActivable) setIsActive(prev => !prev);
    }, [addedOnClick, isActivable])

    useEffect(()=>{
        setIsActive(activeState);
    }, [activeState])

    return (
        <button 
            aria-label={areaLabel} 
            onClick={handleClick}
            className={clsx(
                "iconBtn",
                size,
                isActivable && isActive ? "active": "",
            )}
            name={name}
            {...btnProps}
            >            
            {icon}
        </button>
    );
};

export default IconButton;
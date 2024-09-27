import Button from "./Button";

const CompletedDiv = ({ cssClass, doneValue, onClickMinus, onClickPlus}) => {

    return(
        <div className={cssClass}>
            <Button  text={"-"} className={"btn-minus"} onClick={onClickMinus}/>
            <Button text={"+"} className={"btn-plus"} onClick={onClickPlus}/>
            <div className="completed-div">
                {`0/${doneValue}`}
            </div>
        </div>
            
    )
}

export default CompletedDiv;
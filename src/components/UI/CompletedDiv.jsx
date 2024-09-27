import Button from "./Button";

const CompletedDiv = ({ cssClass, doneValue, maxValue, onClickMinus, onClickPlus }) => {
    return (
        <div className={cssClass}>
            <Button text={"-"} className={"btn-minus"} onClick={onClickMinus} />
            <Button text={"+"} className={"btn-plus"} onClick={onClickPlus} />
            <div className="completed-div">
                {`${doneValue}/${maxValue}`} {/* Displaying doneValue/MaxValue */}
            </div>
        </div>
    );
};

export default CompletedDiv;

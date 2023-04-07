
// Additional information.I will display the plate on the right
// Additional information.I will display the plate on the right


const AdditionalInformation = (props) => {

    return (
        <>
            <div className="additional-info">
                <span>{props.exchange}</span>
                <span>{props.last_trade_time}</span>
            </div>
        </>
    )
}

export default AdditionalInformation;
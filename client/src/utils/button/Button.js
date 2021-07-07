import './button.css'

function Button(props) {
    const button = () => {
        let template = ""
        switch(props.type){

            case "default":
                template = (
                    <div className="button">
                        {props.desc}
                    </div>
                )
                break;
            case 'share':
                template = (
                    <div className="shareButton">
                        {props.desc}
                    </div>
                )
                break;
            default:
                template = ""
        }
        return template
    }
    return (
        <div>
            {button()}
        </div>
    )
}

export default Button
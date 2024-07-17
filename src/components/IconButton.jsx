import { Button } from "react-bootstrap";

export default function IconButton({isTop, className, onClick, text}) {
    let margin = isTop ? 'light rounded-pill my-3' : 'light rounded-pill';
    const iconMargin = text ? ' me-3' : ' ';


    return (
        <Button variant = {margin} onClick={onClick} className="ms-auto"> 
            <i 
            className={className + iconMargin}
            style= {{ fontSize: '24px', color: isTop ? 'dodgerblue' : 'black' }}
            ></i>
            {text}
        </Button>
    );
}
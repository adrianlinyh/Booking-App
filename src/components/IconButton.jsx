import { Button } from "react-bootstrap";

export default function IconButton({ isTop, isBottom, className, onClick }) {
    let variant = 'light';

    if (isTop) {
        variant = 'light';
    }
        else if(isBottom) {
            variant = 'light';
    }

    return (
        <Button variant ={variant} style={{ marginBottom: '7px' }} onClick={onClick}>
            <i className = {className} style={{ fontSize: '24px'}}></i>
        </Button>
    );


}
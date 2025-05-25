import { Link } from "react-router-dom";
import SearchOrder from '../features/order/SearchOrder';

export default function Header() {

    return (
        <header>
            <Link to='/'>FAST REACT PIZZA CO.</Link>
            <SearchOrder/>
            <p>Logo</p>
        </header>
            
        
    )
}
import '../Styles/Nav.css';

export default function Nav({props}) {
    return (
        <nav>
            <img src={props.logo} alt="logo" />
            <a href={props.link}>my travel journal.</a>
        </nav>
    )
}
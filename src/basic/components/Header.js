
const handle = () => {
    return 0;
}
const HeaderComponent = (props) => {
    let t = handle();
    return (
        <h1>Header Component - {t} - name: {props.name} - age: {props.age}</h1>
    )
}
export default HeaderComponent
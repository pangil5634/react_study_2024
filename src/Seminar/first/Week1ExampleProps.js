function Week1ExampleProps() {
    return (
        <div>
            <h1>Week1ExampleProps</h1>

            <p>defaultProps를 <strong>쓴</strong> 경우 : <MyName /></p>
            <p>defaultProps를 <strong>쓰지 않은</strong> 경우 : <MyName name = "김광일"/></p>
            
        </div>
    );
}


function MyName(props) {
    return <strong>Hello {props.name}!</strong>;
}

MyName.defaultProps = {
    name : "World",
}
export default Week1ExampleProps;
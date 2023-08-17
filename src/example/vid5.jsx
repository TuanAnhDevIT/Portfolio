import { useState } from "react";


const Vid5 = (props) => {
    const { name } = props;
    const [age, setAge] = useState(0);
    return (
        <div>
            Ex in video5 - my name is {name} | age = {age}
        </div>
    )
}

export default Vid5;
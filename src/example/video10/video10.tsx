import { useState } from "react";
import './Video10.css'

export interface IUser {
    name: string;
    age: number | string;
    city: string
}

interface IProps {
    defaultName: string;
    defaultAge: number | string; // required => optional
}

const Video10 = (props: IProps) => {
    const { defaultName, defaultAge } = props;
    //Bổ sung type
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");

    const [users, setUsers] = useState<IUser[]>([])

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);


    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectedCity
        }
        setUsers([...users, user]);
        setName("");
        setAge("")
    }

    const handleOnchangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={handleOnchangeName} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input
                        onChange={(event) => setAge(event.target.value)}
                        type="text" value={age} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    {/* update with loop */}
                    <select onChange={(event) => setSelectedCity(event.target.value)}>
                        {city.map(item => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* update with loop */}
                        {users.map(user => {
                            return (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;
interface IProps {
    defaultName: string;
    defaultAge?: number; // required => optional
}

const Video13 = (props: IProps) => {

    const { defaultName, defaultAge = 24 } = props;

    return (
        <div>
            hello word with {defaultName} age {defaultAge}
        </div>
    )
}

export default Video13;
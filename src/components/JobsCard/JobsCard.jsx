
const JobsCard = ({job}) => {
    const {logo} = job;
    return (
        <div>
            <h1>Jobs card:</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default JobsCard;
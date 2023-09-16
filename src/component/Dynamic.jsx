
const Dynamic = ({ name, remaining, cradit }) => {
    console.log(name)
    return (

        <div className="card  bg-base-100 shadow-xl p-5">
            <h1 className="text-[#2F80ED] py-3">Credit Hour Remaining {remaining} hr</h1>
            < hr />
            <h1 className="text-[#1C1B1B] text-xl font-bold py-3">Course name</h1>

            {
                name.map(info => (
                    <li className="list-decimal text-sm py-1 px-3">{info.course_name}</li>
                ))
            }
            <hr />
            <p className="pt-3">Total Credit Hour : {cradit}</p>
        </div >
    );
};

export default Dynamic;
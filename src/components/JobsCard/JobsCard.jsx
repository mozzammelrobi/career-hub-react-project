import { IoLocation } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";

const JobsCard = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-10" src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#808EFE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#808EFE]">{job_type}</button>
                    </div>
                    <div className="mt-4 flex gap-5">
                        <h2 className="flex gap-2">
                            <IoLocation className="text-2xl"></IoLocation>
                            {location}
                        </h2>
                        <h2  className="flex gap-2">
                            <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
                            {salary}
                        </h2>

                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;
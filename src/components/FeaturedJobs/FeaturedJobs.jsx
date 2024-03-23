import { useEffect, useState } from "react";
import JobsCard from "../JobsCard/JobsCard";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl">Featured Jobs: {jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {
                    jobs.map((job) => <JobsCard key={job.id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
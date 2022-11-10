import { useParams } from "react-router-dom";


export const DetailedJob = () => {

    const { jobId } = useParams();
    return (
        <p>
            This is detailed job {jobId}
        </p>
    );
}
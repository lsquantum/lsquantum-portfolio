import { AppConfig } from "../../config/AppConfig";
import { TrainingCertificationIcon } from "../icons/Icon";
import Title from "../title/Title";
import TrainingCertificationItem from "../trainingcertification/TrainingCertificationItem";

function TrainingCertificationSection() {
    return (
        <>
            <div className='flex flex-nowrap'>
                <TrainingCertificationIcon />
                <Title text={'Trainings and Certifications'} />
            </div>
            {AppConfig.trainingCertification.sort(function (a: any, b: any) {
                return a.order - b.order
            }).map((item, i) => {
                return (
                    <TrainingCertificationItem
                        key={i}
                        title={item.title}
                        year={item.year}
                        info={item.info}
                    />
                );
            })}
        </>
    );
}

export default TrainingCertificationSection;
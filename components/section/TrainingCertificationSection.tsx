import useLanguage from "../../hooks/useLanguage";
import { TrainingCertificationIcon } from "../icons/Icon";
import Title from "../title/Title";
import TrainingCertificationItem from "../trainingcertification/TrainingCertificationItem";

function TrainingCertificationSection() {
    const [languageItems] = useLanguage();
    return (
        <>
            <div className='flex flex-nowrap'>
                <TrainingCertificationIcon />
                <Title text={languageItems.trainingsCertificationsTitle} />
            </div>
            {languageItems.trainingCertification.sort(function (a: any, b: any) {
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
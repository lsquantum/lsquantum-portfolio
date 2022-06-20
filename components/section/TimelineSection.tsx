import { AppConfig } from "../../config/AppConfig";
import { TimelineIcon } from "../icons/Icon";
import TimelineItem from "../timeline/TimelineItem";
import Title from "../title/Title";
import ItemWrapper from "../wrappers/ItemWrapper";
import TimelineItemWrapper from "../wrappers/TimelineItemWrapper";

function TimelineSection() {
    return (
        <ItemWrapper>
            <div className='flex flex-nowrap'>
                <TimelineIcon />
                <Title text={'Timeline'} style={'my-3'} />
            </div>
            <TimelineItemWrapper>
                {AppConfig.timeline.sort(function (a: any, b: any) {
                    return a.order - b.order
                }).map((item, i) => {
                    return (
                        <TimelineItem
                            key={i}
                            company={item.company}
                            date={item.year}
                        />
                    );
                })}
            </TimelineItemWrapper>
        </ItemWrapper>
    );
}

export default TimelineSection;
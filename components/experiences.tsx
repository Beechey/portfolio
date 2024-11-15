import React from "react";
import SectionHeading from "./ui/SectionHeading";
import Experience from "./ui/Experience";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-32">
//       <SectionHeading>My Experience</SectionHeading>

//       <VerticalTimeline lineColor="#2563eb">
//         {experiencesData.map((item, index) => (
//           <React.Fragment key={index}>
//             <VerticalTimelineElement
//               contentStyle={{
//                 background: "#334155",
//                 boxShadow: "none",
//                 border: "1px solid rgba(0, 0, 0, 0.05)",
//                 textAlign: "left",
//                 padding: "1.3rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight: "7px solid #334155",
//               }}
//               date={item.date}
//               icon={item.icon}
//               iconStyle={{
//                 background: "#334155",
//                 fontSize: "1.5rem",
//               }}>
//               <h3 className="font-semibold capitalize">{item.title}</h3>
//               <p className="font-normal !mt-0">{item.location}</p>
//               <p className="!mt-1 !font-normal text-gray-400 dark:text-white/75">
//                 {item.description}
//               </p>
//             </VerticalTimelineElement>
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-32">
      <SectionHeading>My Experience</SectionHeading>
      <div>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <Experience {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsCircle } from "react-icons/bs";

function Roadmap() {
  return (
    <div className="roadmap my-5 py-4 container" id="roadmap">
      <div className="text-center">
      <h4>ROADMAP</h4>
      <h2 className="display-4 fw-bold my-4">Our Plan</h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ display: "none" }}
          iconStyle={{ color: "#f27022FF", backgroundColor: "white" }}
          icon={<BsCircle />}
        >
          <h3 className="vertical-timeline-element-title">Phase 1</h3>
          <ul className="opacity-75 mt-4">
            <li>Team Expansion</li>
            <li>Social Media and Community</li>
            <li>Integration</li>
            <li>Contract Creation</li>
            <li>Website Deployment</li>
            <li>Audit & KYC</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ display: "none" }}
          iconStyle={{ color: "#f27022FF", backgroundColor: "white" }}
          icon={<BsCircle />}
        >
          <h3 className="vertical-timeline-element-title">Phase 2</h3>
          <ul className="opacity-75 mt-4">
            <li>Team Expansion</li>
            <li>Social Media and Community</li>
            <li>Integration</li>
            <li>Contract Creation</li>
            <li>Website Deployment</li>
            <li>Audit & KYC</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ display: "none" }}
          iconStyle={{ color: "#f27022FF", backgroundColor: "white" }}
          icon={<BsCircle />}
        >
          <h3 className="vertical-timeline-element-title">Phase 3</h3>
          <ul className="opacity-75 mt-4">
            <li>Team Expansion</li>
            <li>Social Media and Community</li>
            <li>Integration</li>
            <li>Contract Creation</li>
            <li>Website Deployment</li>
            <li>Audit & KYC</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ display: "none" }}
          iconStyle={{ color: "#f27022FF", backgroundColor: "white" }}
          icon={<BsCircle />}
        >
          <h3 className="vertical-timeline-element-title">Phase 4</h3>
          <ul className="opacity-75 mt-4">
            <li>Team Expansion</li>
            <li>Social Media and Community</li>
            <li>Integration</li>
            <li>Contract Creation</li>
            <li>Website Deployment</li>
            <li>Audit & KYC</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Roadmap;

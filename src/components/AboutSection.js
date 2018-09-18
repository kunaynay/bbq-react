import React from "react";

const AboutSection = (props) => {
  return (
    <div className="imageBox">
      <img src={require(`../assests/img/${props.image}.jpg`)} />
      <div className="written">
        <p>{props.title}</p>
        <p>
          Bacon ipsum dolor amet jerky ea consectetur velit bacon aliqua ad
          tongue salami ut chicken. Capicola aliqua pork loin meatloaf, dolore
          tail burgdoggen est laboris pork chop ut. Shank dolore frankfurter,
          buffalo tri-tip ea corned beef short ribs proident sirloin pancetta
          leberkas. Ipsum lorem ex pariatur. Pork bresaola ut salami, duis
          exercitation enim eu pork belly. Tail dolor adipisicing, commodo
          burgdoggen elit short ribs ball tip culpa.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
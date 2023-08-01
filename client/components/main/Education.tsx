import { useEffect, useState } from "react";
import { Education } from "@/types/mainType";

const Education = () => {
  const [education, setEducation] = useState<Education[]>([]);

  const getExperiences = async () => {
    await fetch("../../public/data/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  };

  useEffect(() => {
    try {
      getExperiences();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div>Education</div>
      {education}
    </>
  );
};

export default Education;

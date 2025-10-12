import { useCV } from "@/context/CVContext";
import { ExperienceEntry, HobbiesItem, SkillsItem } from "@/interfaces/cv.interface";
import { EnvironmentFilled, GithubFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import { EducationEntry } from '../../interfaces/cv.interface';

export const TemplateA: React.FC = () => {
  const { cvData: data } = useCV();

  return (
    <div className="m-0 p-0 w-full h-full">
      { data && <div className="w-full h-full">
        <div className="flex items-center h-[20%]">
          <div className="w-1/3 flex flex-col justify-center h-full">
            <img src={data.general.profilePhoto} alt="" className="w-48 h-48 mx-auto rounded-full" />
          </div>
          <div className="w-2/3 p-8">
            {(data.general.firstName !== "") && <div className="text-4xl font-extrabold" style={{color: data.colors.base}}>{data?.general.firstName} {data.general.lastName}</div>}
            {(data.general.title !== "") && <div className="text-2xl font-medium mt-2" style={{color: data.colors.secondary}}>{data.general.title}</div>}
          </div>
        </div>
        <div className="flex h-[80%]">
          <div className="w-1/3 h-full p-8 text-white" style={{background: data.colors.base}}>
            <div>
              <div className="font-extrabold text-lg">CONTACT</div>
              <div className="h-0.5 w-full mt-2 bg-white"></div>
              <div className="py-4">
                <div className="flex gap-4">
                  <PhoneFilled />
                  {data.contact.phone !== "" && <div>+261 {data.contact.phone}</div>}
                </div>
                <div className="flex gap-4 mt-4">
                  <MailFilled />
                  {data.contact.email !== "" && <div>{data.contact.email}</div>}
                </div>
                <div className="flex gap-4 mt-4">
                  <GithubFilled />
                  {data.contact.github !== "" && <div>{data.contact.github}</div>}
                </div>
                <div className="flex gap-4 mt-4">
                  <EnvironmentFilled />
                  {data.contact.address !== "" && <div>{data.contact.address}</div>}
                </div>
              </div>
              <div className="py-2">
                <div className="font-extrabold text-lg">ETUDES ET DIPLOMES</div>
                <div className="h-0.5 w-full my-2 bg-white"></div>
                { data && data.education.length > 0 && data.education.slice(0,3).map((ed: EducationEntry, index: number) =>{
                  return <div key={index} className="py-2">
                    <div className="font-medium">{ed.title}</div>
                    <div>{ed.institution}</div>
                    <div className="text-sm">{ed.period}</div>
                  </div>
                })}
              </div>
              <div className="py-2">
                <div className="font-extrabold text-lg">CENTRE D'INTERETS</div>
                <div className="h-0.5 w-full my-2 bg-white"></div>
                  { data && data.hobbies.length > 0 && data.hobbies.slice(0,4).map((hobby: HobbiesItem, index: number) =>{
                    return <div key={index} className="py-1.5 flex items-center gap-4">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <div>{hobby.hobby}</div>
                    </div>
                  })}
              </div>
            </div>            
          </div>
          <div className="w-2/3 p-8">
            <div>
              <div className="font-extrabold text-lg">A PROPOS</div>
              <div className="h-0.5 w-full my-2" style={{background: data.colors.third}}></div>
              {data.general.profileSummary !== "" && <div className="font-medium text-justify" style={{color: data.colors.third}}>{data.general.profileSummary}</div>}
            </div>
            <div className="py-4">
              <div className="font-extrabold text-lg">COMPETENCES</div>
              <div className="h-0.5 w-full my-2" style={{background: data.colors.third}}></div>
              <div className="grid grid-two-spaces gap-1">
                { data && data.skills.length > 0 && data.skills.slice(0,8).map((skill: SkillsItem, index: number) =>{
                    return <div key={index} className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full" style={{background: data.colors.third}}></div>
                      <div className="font-medium" style={{color: data.colors.third}}>{skill.skill}</div>
                    </div>
                })}
              </div>
            </div>
            <div className="">
              <div className="font-extrabold text-lg">EXPERIENCES</div>
              <div className="h-0.5 w-full my-2" style={{background: data.colors.third}}></div>
              {
                data && data.experiences.length > 0 && data.experiences.slice(0,4).map((exp: ExperienceEntry, index: number) => {
                  return <div key={index} className="py-2">
                    <div className="flex justify-between font-medium" style={{color: data.colors.third}}>
                      <div>{exp.title}</div>
                      <div>{exp.period}</div>
                    </div>
                    <div className="py-0.5 font-bold">{exp.company}</div>
                    <div className="font-medium text-justify" style={{color: data.colors.third}}>{exp.description}</div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div> }
    </div>
  );
};
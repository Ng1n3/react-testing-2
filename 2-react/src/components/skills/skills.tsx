import { SkillsProps } from './skills.types';

export default function Skills({ skills }: SkillsProps) {
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
}
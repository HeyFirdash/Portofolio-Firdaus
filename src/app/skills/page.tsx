
import { skills } from "@/lib/data";

export default function SkillsPage() {
  const groupedSkills = skills.reduce<Record<string, string[]>>(
    (groups, skill) => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }

      groups[skill.category].push(skill.name);
      return groups;
    },
    {},
  );

  return (
    <main className="container page-content">
      <p className="eyebrow">MY TOOLKIT</p>

      <h1 className="page-title">
        Skills<span>.</span>
      </h1>

      <p className="page-description">
        Technologies and concepts I am learning and using
        to solve problems.
      </p>

      <div className="skills-groups">
        {Object.entries(groupedSkills).map(([category, names]) => (
          <section className="skill-group" key={category}>
            <h2>{category}</h2>

            <ul className="skill-grid">
              {names.map((name) => (
                <li className="skill-item" key={name}>
                  <span className="status-dot" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

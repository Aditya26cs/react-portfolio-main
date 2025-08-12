import React from "react";
import styles from "./TechStack.module.css";
import cssIcon from "../../assets/skills/css.png";
import htmlIcon from "../../assets/skills/html.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import nodeIcon from "../../assets/skills/node.png";
import reactIcon from "../../assets/skills/react.png";

const categories = [
	{
		title: "Frontend",
		tools: [
			{ name: "React", icon: reactIcon },
			{ name: "Tailwind CSS" },
			{ name: "JavaScript" },
		],
	},
	{
		title: "Backend",
		tools: [
			{ name: "Node.js", icon: nodeIcon },
			{ name: "Express.js" },
		],
	},
	{
		title: "Database",
		tools: [
			{ name: "MongoDB", icon: mongodbIcon },
			{ name: "SQL" },
		],
	},
	{
		title: "Tools & Platforms",
		tools: [
			{ name: "Postman" },
			{ name: "VS Code" },
			{ name: "Vercel" },
			{ name: "Git" },
			{ name: "GitHub" },
		],
	},
	{
		title: "Programming Languages",
		tools: [
			{ name: "Java" },
			{ name: "JavaScript" },
		],
	},
];

export const TechStack = () => {
	return (
		<section className={styles.container} id="techstack">
			<h2 className={styles.title}>Tech Stack</h2>
			{categories.map((cat) => (
				<div className={styles.category} key={cat.title}>
					<div className={styles.categoryTitle}>{cat.title}</div>
					<div className={styles.tools}>
						{cat.tools.map((tool) => (
							<div className={styles.tool} key={tool.name}>
								{tool.icon && (
									<img
										src={tool.icon}
										alt={tool.name + " icon"}
										className={styles.skillIcon}
									/>
								)}
								<span className={styles.skillName}>{tool.name}</span>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

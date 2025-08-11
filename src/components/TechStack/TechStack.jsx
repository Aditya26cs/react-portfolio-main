import React from "react";
import styles from "./TechStack.module.css";
import cssIcon from "../../assets/skills/css.png";
import figmaIcon from "../../assets/skills/figma.png";
import graphqlIcon from "../../assets/skills/graphql.png";
import htmlIcon from "../../assets/skills/html.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import nodeIcon from "../../assets/skills/node.png";
import reactIcon from "../../assets/skills/react.png";

const categories = [
	{
		title: "Frontend",
		tools: [
			{ name: "React", icon: reactIcon, tagline: "Building dynamic UIs" },
			{ name: "Tailwind CSS", tagline: "Rapid styling, modern look" },
			{ name: "JavaScript", tagline: "The language of the web" },
		],
	},
	{
		title: "Backend",
		tools: [
			{ name: "Node.js", icon: nodeIcon, tagline: "Server-side power" },
			{ name: "Express.js", tagline: "Fast, minimalist APIs" },
		],
	},
	{
		title: "Database",
		tools: [
			{ name: "MongoDB", icon: mongodbIcon, tagline: "NoSQL flexibility" },
			{ name: "SQL", tagline: "Relational data mastery" },
		],
	},
	{
		title: "Tools & Platforms",
		tools: [
			{ name: "Postman", tagline: "API testing made easy" },
			{ name: "VS Code", tagline: "My coding playground" },
			{ name: "Vercel", tagline: "Instant deployments" },
			{ name: "Git", tagline: "Version control wizardry" },
			{ name: "GitHub", tagline: "Collaboration central" },
		],
	},
	{
		title: "Programming Languages",
		tools: [
			{ name: "Java", tagline: "Robust & versatile" },
			{ name: "JavaScript", tagline: "Universal web scripting" },
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
								<span className={styles.toolTagline}>{tool.tagline}</span>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

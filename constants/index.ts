import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
	RxDiscordLogo,
	RxGithubLogo,
	RxInstagramLogo,
	RxTwitterLogo,
	RxLinkedinLogo,
} from "react-icons/rx";

export const SOCIALS = [
	{
		name: "GitHub",
		icon: RxGithubLogo,
		link: "https://github.com/Itsme-Aneek",
	},	
  {
		name: "Linkedin",
		icon: RxLinkedinLogo,
		link: "https://www.linkedin.com/in/aneek-hazra-6630b6261/",
	},
	{
		name: "Instagram",
		icon: RxInstagramLogo,
		link: "https://www.instagram.com/_an_eek_/",
	},

] as const;

export const FRONTEND_SKILL = [
	{
		skill_name: "HTML",
		image: "html.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "CSS",
		image: "css.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "JavaScript",
		image: "js.png",
		width: 65,
		height: 65,
	},
	{
		skill_name: "Tailwind CSS",
		image: "tailwind.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Material UI",
		image: "mui.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "React",
		image: "react.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "TypeScript",
		image: "ts.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Next.js 14",
		image: "next.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "PHP",
		image: "php.png",
		width: 65,
		height: 65,
	},
] as const;

export const BACKEND_SKILL = [
	{
		skill_name: "Node.js",
		image: "node.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "Express.js",
		image: "express.png",
		width: 80,
		height: 80,
	},
	{
		skill_name: "MongoDB",
		image: "mongodb.png",
		width: 40,
		height: 40,
	},
	{
		skill_name: "Firebase",
		image: "firebase.png",
		width: 55,
		height: 55,
	},
	{
		skill_name: "PostgreSQL",
		image: "postgresql.png",
		width: 70,
		height: 70,
	},
	{
		skill_name: "MySQL",
		image: "mysql.png",
		width: 70,
		height: 70,
	},
] as const;

export const FULLSTACK_SKILL = [
	{
		skill_name: "Bootstrap",
		image: "bootstrap.png",
		width: 70,
		height: 70,
	},
	{
		skill_name: "Sass",
		image: "sass.png",
		width: 70,
		height: 70,
	},
	{
		skill_name: "Figma",
		image: "figma.png",
		width: 50,
		height: 50,
	},
] as const;

export const PROJECTS = [
	{
		title: "Maze Game",
		description:
			"A simple Maze Game built using React. And the Maze size corresponds to no. of rows and columns in the maze and it ranges from 5-40 when played on PC and 5-14 when played on mobile phone.",
		image: "/projects/project-1.png",
		link: "https://mazegamelive.netlify.app/",
	},
	{
		title: "PLANATE-X",
		description:
			"Plantex — a clean and modern landing page for a plant shop or interior greenery design business. This project is built using HTML, CSS, and JavaScript, and it is fully responsive across all devices including desktops, tablets, and smartphones.",
		image: "/projects/project-2.png",
		link: "https://itsme-aneek.github.io/PLANATE-X/",
	},
	{
		title: "MERN Stack Restaurant Reservation System",
		description:
			"A full-stack web application built using the MERN Stack (MongoDB, Express.js, React, Node.js) that allows users to book tables at restaurants, manage reservations, and view availability in real-time.",
		image: "/projects/project-3.png",
		link: "https://example.com",
	},
] as const;

export const FOOTER_DATA = [
	{
		title: "Community",
		data: [
			{
				name: "GitHub",
				icon: RxGithubLogo,
				link: "https://github.com/Itsme-Aneek",
			},
			{
				name: "Discord",
				icon: RxDiscordLogo,
				link: "https://discordapp.com/users/739832435985874977",
			},
		],
	},
	{
		title: "Social Media",
		data: [
			{
				name: "Instagram",
				icon: RxInstagramLogo,
				link: "https://www.instagram.com/_an_eek_/",
			},
			{
				name: "Linkedin",
				icon: RxLinkedinLogo,
				link: "https://www.linkedin.com/in/aneek-hazra-6630b6261/",
			},
		],
	},
	{
		title: "About",
		data: [
			{
				name: "Become Sponsor",
				icon: null,
				link: "https://github.com/Itsme-Aneek",
			},
			{
				name: "Learning about me",
				icon: null,
				link: "https://github.com/Itsme-Aneek",
			},
			{
				name: "Contact Me",
				icon: null,
				link: "mailto:aneekhazra124@gmail.com",
			},
		],
	},
] as const;

export const NAV_LINKS = [
	{
		title: "About me",
		link: "#about-me",
	},
	{
		title: "Skills",
		link: "#skills",
	},
	{
		title: "Projects",
		link: "#projects",
	},
] as const;

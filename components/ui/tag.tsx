interface Tag {
	text: string;
	color: string;
	bg: string;
	icon?: React.ReactNode;
	border?: string;
}
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiPython,
	SiSelenium,
	SiPandas,
	SiNumpy,
	SiPrisma,
	SiTailwindcss,
	SiRedis,
	SiReactquery,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoJava } from "react-icons/bi";
import { RiOpenaiFill } from "react-icons/ri";
import { TbSoup } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { MdFingerprint } from "react-icons/md";

const tags: Tag[] = [
	{
		text: "React",
		color: "text-black",
		bg: "bg-sky-400",
		icon: <SiReact />,
	},
	{
		text: "Next.js",
		color: "text-slate-200",
		bg: "bg-black",
		border: "border border-slate-600",
		icon: <SiNextdotjs />,
	},
	{
		text: "TypeScript",
		color: "text-white",
		bg: "bg-blue-700",
		border: "border border-slate-500",
		icon: <SiTypescript />,
	},
	{
		text: "Python",
		color: "text-yellow-300",
		bg: "bg-blue-500",
		icon: <SiPython />,
	},
	{
		text: "Selenium",
		color: "text-slate-100",
		bg: "bg-gray-600",
		icon: <SiSelenium />,
	},
	{
		text: "Pandas",
		color: "text-white",
		bg: "bg-indigo-900",
		icon: <SiPandas />,
	},
	{
		text: "Numpy",
		color: "text-white",
		bg: "bg-black",
		border: "border border-slate-600",
		icon: <SiNumpy />,
	},
	{
		text: "SQL",
		color: "text-blue-500",
		bg: "bg-blue-100",
		border: "border border-blue-500",
		icon: <BiLogoPostgresql />,
	},
	{
		text: "Java",
		color: "text-white",
		bg: "bg-black",
		border: "border border-slate-600",
		icon: <BiLogoJava />,
	},
	{
		text: "OpenAI",
		color: "text-black",
		bg: "bg-teal-300",
		icon: <RiOpenaiFill />,
	},
	{
		text: "Prisma",
		color: "text-slate-100",
		bg: "bg-indigo-600",
		icon: <SiPrisma />,
	},
	{
		text: "bs4",
		color: "text-slate-100",
		bg: "bg-indigo-600",
		icon: <TbSoup />,
	},
	{
		text: "Tailwind",
		color: "text-slate-100",
		bg: "bg-blue-500",
		icon: <SiTailwindcss />,
	},
	{
		text: "Matplotlib",
		color: "text-slate-100",
		bg: "bg-blue-800",
		icon: <VscGraph />,
	},
	{
		text: "Redis",
		color: "text-slate-100",
		bg: "bg-red-700",
		icon: <SiRedis />,
	},
	{
		text: "React Query",
		color: "text-slate-100",
		bg: "bg-red-500",
		icon: <SiReactquery />,
	},
	{
		text: "Auth",
		color: "text-slate-100",
		bg: "bg-black",
		border: "border border-slate-600",
		icon: <MdFingerprint />,
	},
];

import Link from "next/link";

interface TagProps {
	tagName: string;
}

export default function Tag({ tagName, ...props }: TagProps) {
	const tag = tags.find((tag) => tag.text === tagName);
	return (
		<span
			className={`${tag?.color} ${tag?.bg} ${tag?.border}  px-2 rounded-sm font-mono text-sm inline-flex items-center gap-1`}
			{...props}
		>
			{tag?.icon && tag.icon}
			{tag?.text}
		</span>
	);
}

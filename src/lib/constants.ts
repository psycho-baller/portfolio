import type { Message } from "./types";

export const BASE_URL = import.meta.env.BASE_URL;

export const navLinks = [
	{
		href: "/blog",
		title: "Blog",
	},
	{
		href: "/about",
		title: "About",
	},
	{
		href: "/contact",
		title: "Contact",
	},
	{
		href: "/support",
		title: "Support",
	},
	{
		href: "/resume",
		title: "Resume",
	},
];
export const externalLinks = {
	portfolio: "https://rami-maalouf.com",
	github: "https://github.com/psycho-baller",
	youtube: "https://youtube.com/@ramimaalouf",
	youtubeSub: "/youtube",
	linkedin: "https://www.linkedin.com/in/rami-m/",
	strava: "https://www.strava.com/athletes/50533842",
	email:
		"https://mail.google.com/mail/u/0/?fs=1&to=ramim66809@gmail.com&su=About...&body=Hey%20Rami,%20....&tf=cm",
	goodreads: "https://www.goodreads.com/user/show/161793210-rami",
	storygraph: "https://app.thestorygraph.com/profile/ramimaalouf",
	medium: "https://medium.com/@ramimaalouf",
	resume:
		"https://docs.google.com/document/d/1tY_v0Se3EH0pbjVZ5-hqM8I8uq0jK4ctuRLBOG4_JrI/edit?usp=sharing",
	notes: "https://notes.rami-maalouf.tech",
	tiktok: "https://www.tiktok.com/@meditations_of_rami",
	x: "https://x.com/rami__maalouf",
	substack: "https://ramimaalouf.substack.com/",
	instagram: "https://www.instagram.com/psycho.baller/",
} as const;

export const externalFooterLinks = [
	{
		iconName: "mdi:github",
		href: externalLinks.github,
		name: "Link to my Github",
	},
	{
		iconName: "ant-design:youtube-filled",
		href: externalLinks.youtubeSub,
		name: "Link to my Youtube",
	},
	{
		iconName: "mdi:linkedin",
		href: externalLinks.linkedin,
		name: "Link to my LinkedIn",
	},
	{
		iconName: "ic:round-email",
		href: externalLinks.email,
		name: "Link to Email me",
	},
	{
		iconName: "simple-icons:strava",
		href: externalLinks.strava,
		name: "Link to my Strava",
	},
	{
		iconName: "ic:baseline-tiktok",
		href: externalLinks.tiktok,
		name: "Link to my TikTok",
	},
	{
		iconName: "mdi:twitter",
		href: externalLinks.x,
		name: "Link to my X",
	},
	{
		iconName: "simple-icons:substack",
		href: externalLinks.substack,
		name: "Link to my Substack",
	},
];

// TODO: use Notion instead as a CMS
export const messages = {
	"snipd-team": {
		header: "Hey Snipd!",
		body: `1: I amazed by and in love with Snipd
2: A huge fan of what you 5 are doing and I would love to be a +1 to the team, but before that,
4: I'm transiting through ZRH(layover 6:10-13:25; may 10), and will try to leave the airport and if that's possible I would love to meet you guys in person. I wanna learn about you guys' journey and if you want we could make a podcast episode (and maybe catch a game of table tennis😉)
5: Why I'm a great fit: I am currently doing a SWE internship @IBM and will be done exactly one year from now. Currently I wouldn't really provide unique benefit by joining your team but I will be in a year, I have a few project ideas related to AI that I am working on almost everyday. Right now I can mainly offer web dev (3D, front-end, back-end) and basic Flutter (in the process of learning). You can find more info about what I build in my [github](https://github.com/psycho-baller)
6: Thank you for every second you guys put into Snipd... and reading this message
P.S: I would love to meet up with all of you but I'm also down to meet with whoever is available and willing to meet up`,
		actionButton1: {
			text: "Email me",
			url: "https://mail.google.com/mail/u/0/?fs=1&to=rami.rami@ucalgary.ca&su=Snipd meetup&body=Hey%20Rami,%0A%0AYeah sure we'd love to meet up...&tf=cm",
		},
	},
} as { [key: string]: Message };

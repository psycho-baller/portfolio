import type { message } from "./types";

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
        href: "/#contact",
        title: "Contact",
    },

    {
        href: "https://github.com/psycho-baller",
        title: "Resume",
    },
];

export const externalLinks = [
    {
        name: "mdi:github",
        href: "https://github.com/psycho-baller",
    },
    {
        name: "ant-design:youtube-filled",
        href: "https://youtube.com/@psycho-coder",
    },
    {
        name: "mdi:linkedin",
        href: "https://www.linkedin.com/in/rami--maalouf/",
    },
    {
        name: "ic:round-email",
        href: "https://mail.google.com/mail/u/0/?fs=1&to=rami.rami@ucalgary.ca&su=About...&body=Hey%20Rami,%20....&tf=cm",
    },
    {
        name: "mdi:resume",
        href: "https://www.linkedin.com/in/rami--maalouf/",
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
            url: "https://mail.google.com/mail/u/0/?fs=1&to=rami.rami@ucalgary.ca&su=Snipd meetup&body=Hey%20Rami,%0A%0AYeah sure we'd love to meet up...&tf=cm"
        }
    },
} as { [key: string]: message };

export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Accueil",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Recherche",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Activité",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Créer un fil de discussion",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communautés",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profil",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "réponses", icon: "/assets/members.svg" },
  { value: "tagged", label: "étiqueté", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "membres", icon: "/assets/members.svg" },
  { value: "requests", label: "demandes", icon: "/assets/request.svg" },
];

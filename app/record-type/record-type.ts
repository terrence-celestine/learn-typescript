type DBChar = "goku" | "piccolo" | "tien" | "krillin" | "master roshi";
type DBZChar = "frieza" | "trunks";
type Villains = "frieza" | "cell" | "buu" | "vegeta";
type AllChars = DBChar | DBZChar | Villains;

type DBZCharInfo = {
  race: string;
  abilities: string[];
};

const zWarriors = new Map<AllChars, DBZCharInfo>();

zWarriors.set("goku", {
  race: "saiyan",
  abilities: ["kamehameha", "kaioken"],
});
zWarriors.set("krillin", {
  race: "human",
  abilities: ["solar flare", "quack"],
});
zWarriors.set("piccolo", {
  race: "namekian",
  abilities: ["solar flare", "special beam cannon"],
});
zWarriors.set("vegeta", {
  race: "saiyan",
  abilities: ["great ape", "galick gun"],
});

console.log(zWarriors.keys());

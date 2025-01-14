interface Character extends CharDescription {
  value: string;
  faction: string;
  image: string;
}

interface CharDescription {
  description: string;
}

class Char {
  value: string;
  image: string;
  description: string;
  faction: string;

  constructor(
    value: string,
    image: string,
    description: string,
    faction: string,
  ) {
    this.value = value;
    this.faction = faction;
    this.image = image;
    this.description = description;
    this.faction = faction;
  }
}

export const characters: Character[] = [
  {
    value: "Space Marine",
    faction: "Emperor of Mankind",
    image:
      "https://thumbs.dreamstime.com/b/red-black-warhammer-model-red-black-warhammer-model-ai-generated-325150441.jpg?w=768",
    description:
      "Space Marines are superhuman warriors created by the Emperor of Mankind. They serve as the elite fighting force of the Imperium, genetically enhanced and trained for war.",
  },
  {
    value: "Astra Militarum",
    faction: "Imperium of Man",
    image:
      "https://i.pinimg.com/736x/a8/28/0a/a8280a5f60e595a98adb375ad50734d4.jpg",
    description:
      "The Astra Militarum, also known as the Imperial Guard, is the vast, massed human military of the Imperium. Despite lacking the advanced technology of other factions, they rely on sheer numbers and discipline.",
  },
  {
    value: "Adeptus Astartes",
    faction: "Emperor of Mankind",
    image:
      "https://wallpapers.com/images/high/dawn-of-war-iii-background-1125-x-2436-31312ymlj491wmue.webp",
    description:
      "The Adeptus Astartes, or Space Marines, are genetically enhanced soldiers that serve the Emperor. They are humanity's ultimate defenders, often dispatched to handle the most dangerous threats.",
  },
  {
    value: "Chaos Space Marine",
    faction: "Chaos Gods",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/8/8f/ChaosSpaceMarine2.jpg/revision/latest?cb=20130203155503",
    description:
      "Chaos Space Marines are former Space Marines who have turned to the worship of the Chaos Gods. They seek to overthrow the Imperium and spread corruption and destruction across the galaxy.",
  },
  {
    value: "Daemon of Chaos",
    faction: "Chaos Gods",
    image:
      "https://media.moddb.com/cache/images/groups/1/11/10808/thumb_620x2000/bloodthirster_by_columbussage-d47j02l.jpg",
    description:
      "Daemons of Chaos are creatures of pure malevolent energy, birthed from the Warp. They serve the Chaos Gods and often invade realspace to sow destruction and torment.",
  },
  {
    value: "Chaos Cultist",
    faction: "Chaos Gods",
    image:
      "https://imgcdn.stablediffusionweb.com/2024/10/1/41680b58-6e37-455e-b28a-b6fe0c3929f8.jpg",
    description:
      "Chaos Cultists are human worshippers of the Chaos Gods. They have abandoned the Emperor’s light and embraced the dark forces of Chaos, often seeking power and corruption.",
  },
  {
    value: "Ork",
    faction: "Ork Horde",
    image:
      "https://static.wikia.nocookie.net/liberproeliis/images/5/53/Ork.jpg/revision/latest?cb=20161110162341&path-prefix=pt-br",
    description:
      "Orks are a violent and anarchic race of green-skinned warriors. They thrive in chaos, constantly fighting each other and any other species, driven by their need for constant war.",
  },
  {
    value: "Tyranid",
    faction: "Tyranid Hive Mind",
    image:
      "https://preview.redd.it/cns8okd8ksk61.jpg?width=1080&crop=smart&auto=webp&s=428db7400f6ce85839dfba9240065585aceb4d8a",
    description:
      "The Tyranids are a race of extragalactic predators, consuming all organic matter they encounter to fuel their endless hunger. They operate as a hive mind and swarm across the galaxy, devouring all in their path.",
  },
  {
    value: "Tau",
    faction: "Greater Good",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2023/11/00006-2789024409.png",
    description:
      "The Tau are a technologically advanced, youthful race seeking to bring the galaxy under their 'Greater Good'. They are pragmatic and use alliances to expand their influence.",
  },
  {
    value: "Eldar",
    faction: "Craftworld Eldar",
    image: "https://warhammeruniverse.com/wp-content/uploads/2023/10/w3.jpeg",
    description:
      "The Eldar are a highly advanced and ancient race that once ruled the galaxy. Now a fractured people, they fight to preserve their remnants from the encroaching forces of Chaos and other threats.",
  },
  {
    value: "Necron",
    faction: "Necron Dynasty",
    image:
      "https://www.gamereplays.org/community/uploads/post-238447-1495055480.png",
    description:
      "The Necrons are an ancient race of mechanical undead, once flesh and blood, but now encased in living metal. They seek to reclaim the galaxy from the younger races and restore their once-glorious empire.",
  },
  {
    value: "Adepta Sororitas",
    faction: "Ecclesiarchy",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/6/68/Sister_of_Battle_Anna_Steinbauer.jpg/revision/latest?cb=20150804074745",
    description:
      "The Adepta Sororitas, or Sisters of Battle, are the militant arm of the Ecclesiarchy, the religious institution of the Imperium. They are fanatically loyal to the Emperor and engage in holy wars to protect the faith.",
  },
  {
    value: "Adeptus Custodes",
    faction: "Imperial Palace",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2024/04/00181-1028464452-copy-1707x2048.jpeg.webp",
    description:
      "The Adeptus Custodes are the personal bodyguards of the Emperor. They are genetically enhanced warriors with unparalleled combat skills and loyalty, tasked with protecting the Emperor at all costs.",
  },
  {
    value: "Imperial Knight",
    faction: "Noble Houses of the Imperium",
    image:
      "https://i0.wp.com/objectivesecured.com.au/wp-content/uploads/2017/06/119ee5ede9f32ea1ad5b3ab02bc29b32.jpg?resize=260%2C300&ssl=1",
    description:
      "Imperial Knights are towering war machines piloted by noble houses. These gargantuan machines are heavily armed and are used in battle to protect the Imperium’s territories.",
  },
  {
    value: "Genestealer Cult",
    faction: "Tyranid Cults",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2023/11/00007-3351530214-1024x700.png",
    description:
      "The Genestealer Cults are insidious groups of Tyranid worshippers who infiltrate and corrupt human societies. They spread the Tyranid menace from within, turning worlds against their own inhabitants.",
  },
  {
    value: "Slaanesh",
    faction: "Chaos Gods",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/e/e4/Slaanesh_God_of_Chaos.jpg/revision/latest?cb=20170710150136",
    description:
      "Slaanesh, the Chaos God of Pleasure, Pain, and Excess, is a being of infinite indulgence. Known for their beauty and decadence, Slaanesh represents the pursuit of satisfaction without limits, whether through luxury, indulgence, or dark pleasures.",
  },
  {
    value: "Khorne",
    faction: "Chaos Gods",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/5/50/Khorne_God_of_Chaos.jpg/revision/latest?cb=20170710150310",
    description:
      "Khorne is the Chaos God of War, Bloodshed, and Rage. He embodies all things violent, seeking to fill the galaxy with constant conflict and bloodshed. Followers of Khorne relish in close combat and killing.",
  },
  {
    value: "Tzeentch",
    faction: "Chaos Gods",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/d/d9/Tzeentch_God_of_Chaos.jpg/revision/latest?cb=20170710150356",
    description:
      "Tzeentch is the Chaos God of Change, Magic, and Scheming. Known as the Changer of Ways, Tzeentch manipulates magic and crafts convoluted schemes to further their god’s goals.",
  },
  {
    value: "Nurgle",
    faction: "Chaos Gods",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/a/a0/Nurgle_God_of_Chaos.jpg/revision/latest?cb=20170710150436",
    description:
      "Nurgle is the Chaos God of Disease, Decay, and Despair. He is often portrayed as a bloated, plague-ridden figure, reveling in the spreading of illness and pestilence across the galaxy.",
  },
  {
    value: "Dark Eldar",
    faction: "Commorragh",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/f/f3/Dark_Eldar.jpg/revision/latest?cb=20180819041712",
    description:
      "The Dark Eldar are a sadistic and depraved offshoot of the Eldar race, inhabiting the dark city of Commorragh, a dimension separate from realspace, where they perpetuate endless cycles of torture and cruelty.",
  },
  {
    value: "Yvraine",
    faction: "Ynnari",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/2/28/Yvraine_2017.jpg/revision/latest?cb=20170629131819",
    description:
      "Yvraine is a powerful character from the Eldar race, who was resurrected by the Chaos God Slaanesh. As the spiritual leader of the Ynnari, she leads a faction of Eldar that seeks to reunite the scattered remnants of their people.",
  },
  {
    value: "Valkyrie",
    faction: "Astra Militarum",
    image:
      "https://warhammer40k.fandom.com/wiki/File:Valkyrie_(Imperial_Guard).jpg",
    description:
      "The Valkyrie is an iconic aerial transport vehicle used by the Astra Militarum. It is capable of rapid troop deployment via its grav-chute system, allowing it to quickly insert troops into the heart of battle.",
  },
  {
    value: "Witch Hunter",
    faction: "Inquisition",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/d/db/Witch_Hunter.jpg/revision/latest?cb=20161118035150",
    description:
      "Witch Hunters are agents of the Inquisition, tasked with hunting down rogue psykers, heretics, and mutants who threaten the Imperium. They operate outside the normal constraints of Imperial law.",
  },
  {
    value: "Saint Celestine",
    faction: "Adepta Sororitas",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/d/d4/Saint_Celestine.jpg/revision/latest?cb=20150601151740",
    description:
      "Saint Celestine is a legendary figure within the Adepta Sororitas and a living saint in the Imperium of Man. Known for her unwavering faith, Celestine inspires the Sisters of Battle in countless battles.",
  },
  {
    value: "Belisarius Cawl",
    faction: "Adeptus Mechanicus",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/6/66/Belisarius_Cawl.jpg/revision/latest?cb=20170709101502",
    description:
      "Belisarius Cawl is an Archmagos Dominus of the Adeptus Mechanicus. He is responsible for the creation of the Primaris Space Marines and is a master of ancient and advanced technologies.",
  },
];

// const newChar = new Char(
//   "Genestealer Cult",
//   "Genestealer Cult",
//   "https://warhammeruniverse.com/wp-content/uploads/2023/11/00007-3351530214-1024x700.png",
//   "fafasdvagewva",
// );

const IaCreatedChar = new Char("Value", "faction", "image", "description");
characters.push(IaCreatedChar);

if (characters.length >= 0) {
  const pos = characters.length - 1;
  // const cc = new Char("Value", "faction", "image", "description");
  console.log("RETURN AQUI ", pos, characters[pos]);
}

console.log("LENGTH ", characters.length - 1);

export default characters;

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
      "https://assetsio.gnwcdn.com/SPACE-MARINE-SITE.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
    description:
      "Space Marines, or Adeptus Astartes, are humanity’s genetically enhanced super-soldiers, created by the Emperor of Mankind during the Great Crusade. They are engineered to be the ultimate warriors, embodying both physical and mental perfection. Clad in power armor and armed with the most advanced weaponry of the Imperium, they are the Emperor’s first and foremost defenders against the myriad threats that assail humanity, from alien invaders to the corrupting forces of Chaos. The Space Marines are divided into chapters, each with its own history, traditions, and doctrines, but all share an unshakable loyalty to the Emperor and the Imperium. Their skills in combat, discipline, and devotion to their cause make them a living embodiment of the Emperor's wrath and protection.",
  },
  {
    value: "Astra Militarum",
    faction: "Imperium of Man",
    image:
      "https://i.pinimg.com/736x/a8/28/0a/a8280a5f60e595a98adb375ad50734d4.jpg",
    description:
      "The Astra Militarum, also known as the Imperial Guard, is the largest and most numerous fighting force in the Imperium of Man. Unlike the genetically enhanced Space Marines, the Astra Militarum consists of ordinary human soldiers, each one chosen for their courage and unwavering loyalty to the Emperor. Despite lacking the advanced technology and superhuman capabilities of other factions, the Astra Militarum compensates with sheer numbers, unwavering discipline, and the ability to call upon devastating artillery and armored vehicles. These soldiers fight to protect humanity from the overwhelming threats that plague the galaxy, often fighting in trenches, amidst bloodshed and devastation. Their resilience and willingness to sacrifice everything for the Imperium makes them the backbone of the Emperor's military forces.",
  },
  {
    value: "Adeptus Astartes",
    faction: "Emperor of Mankind",
    image:
      "https://preview.redd.it/7tq3ajdym0831.jpg?auto=webp&s=316885aec9ca24b30a663f70b4ca8356397f7458",
    description:
      "The Adeptus Astartes, commonly known as the Space Marines, are the Emperor’s finest warriors, crafted through the use of genetic modification, rigorous training, and the implantation of various biological enhancements. These superhuman soldiers are the most effective defenders of the Imperium, sent on the most dangerous missions where their advanced combat prowess is crucial. Each Space Marine is a part of a chapter, a brotherhood forged in battle, where loyalty, honor, and duty are paramount. These chapters maintain their own traditions and unique fighting styles, but all serve the Emperor with unrelenting devotion. The Adeptus Astartes are often the first and last line of defense against alien invaders, heretics, and the forces of Chaos, fighting for the survival of humanity and the preservation of the Emperor’s divine rule.",
  },
  {
    value: "Chaos Space Marine",
    faction: "Chaos Gods",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2024/03/8e7e03a8-8d60-40b7-9a91-e013b80fe913.jpg.webp",
    description:
      "Chaos Space Marines are former Space Marines who have fallen from grace and turned their allegiance to the dark powers of the Chaos Gods. These once-loyal defenders of the Imperium now seek to overthrow the Emperor and plunge the galaxy into anarchy and corruption. Through their pact with Chaos, they gain terrifying new powers, including mutations, daemonic possession, and the ability to tap into the raw energies of the Warp. The Chaos Space Marines are ruthless, fanatical, and filled with a burning desire to spread the influence of their gods across the galaxy. They are the embodiment of destruction, corruption, and betrayal, seeking to tear down the Imperium and bring about a new age of chaos and suffering.",
  },
  {
    value: "Daemon of Chaos",
    faction: "Chaos Gods",
    image:
      "https://mrwallpaper.com/images/high/warhammer-40k-battle-against-chaos-7i2m9yk0lz5c8bqq.webp",
    description:
      "Daemons of Chaos are beings of pure, unadulterated malice, born from the Warp, the tumultuous dimension that lies beyond the material universe. They serve the Chaos Gods, embodying the desires, fears, and emotions that drive their patrons. Each Daemon is a reflection of one of the Chaos Gods—Slaanesh, Khorne, Tzeentch, or Nurgle—and carries with it the inherent traits of its divine master, whether it be the bloodlust of Khorne, the excess and decadence of Slaanesh, the endless change of Tzeentch, or the decay and rot of Nurgle. These creatures often invade realspace to spread corruption, torment, and death, their very presence warping the fabric of reality itself. Daemons are powerful and unpredictable, existing in a constant state of transformation as they seek to carry out their dark masters' will.",
  },
  {
    value: "Chaos Cultist",
    faction: "Chaos Gods",
    image:
      "https://imgcdn.stablediffusionweb.com/2024/10/1/41680b58-6e37-455e-b28a-b6fe0c3929f8.jpg",
    description:
      "Chaos Cultists are humans who have forsaken their loyalty to the Emperor and embraced the dark powers of the Chaos Gods. These individuals are often driven by a desire for power, immortality, or the pursuit of forbidden knowledge, believing that serving Chaos will grant them unimaginable rewards. Over time, these cultists become twisted and corrupted, their bodies and minds warped by the influence of the Warp. They operate in the shadows, infiltrating human societies and spreading the word of the Chaos Gods, often engaging in acts of heresy, sabotage, and terrorism. Chaos Cultists are fanatical in their devotion to their dark masters, and they willingly sacrifice their humanity to achieve the goals of Chaos.",
  },
  {
    value: "Ork",
    faction: "Ork Horde",
    image:
      "https://thecorvuscluster.com/wp-content/uploads/2020/09/orks-carl-holden.gif",
    description:
      "Orks are a brutish and savage race of green-skinned warriors known for their love of violence, destruction, and chaos. They thrive in conflict and constantly seek to engage in battle, whether against each other or any other species unfortunate enough to cross their path. Orks are notorious for their crude but highly effective technology, often creating powerful weapons, vehicles, and war machines from salvaged materials. Their society is anarchic, with the strongest Orks assuming leadership roles, but all Orks share a single goal: to fight and conquer. Driven by an insatiable hunger for battle, Orks are not interested in territory or wealth, only in the thrill of war. Their numbers are vast, and their sheer unpredictability makes them a deadly force to be reckoned with.",
  },
  {
    value: "Tyranid",
    faction: "Tyranid Hive Mind",
    image:
      "https://preview.redd.it/cns8okd8ksk61.jpg?width=1080&crop=smart&auto=webp&s=428db7400f6ce85839dfba9240065585aceb4d8a",
    description:
      "The Tyranids are a terrifying race of extragalactic predators that exist solely to consume all organic matter in their path. They are a hive-minded species, with each individual Tyranid acting in unison with the will of the collective consciousness known as the Hive Mind. The Tyranids travel across the galaxy in vast fleets, devouring entire worlds, consuming all living creatures to fuel their endless hunger. Their approach is one of overwhelming numbers and adaptability, as they evolve and mutate rapidly to counter any threat. Tyranids are a relentless and insatiable force of nature, capable of overwhelming even the most advanced military defenses with their endless swarms of creatures. Their ultimate goal is to consume all life and resources in the galaxy, leaving nothing behind but barren wastelands.",
  },
  {
    value: "Tau",
    faction: "Greater Good",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2023/11/00006-2789024409.png",
    description:
      "The Tau are a technologically advanced, youthful, and idealistic race of aliens whose primary philosophy revolves around the concept of the 'Greater Good.' This ideal promotes unity and cooperation, seeking to bring all species under the Tau Empire's influence for the benefit of all. Unlike other factions that rely on brute strength or violent conquest, the Tau focus on diplomacy, alliances, and strategic warfare. Their advanced technology, especially their weaponry and drones, gives them a formidable edge in combat. The Tau are a relatively new force in the galaxy, but they have rapidly expanded, forming alliances with other races while also assimilating those who are willing to embrace their vision. However, this idealism is not without its flaws, and the Tau’s expansion often comes at the cost of individual freedom and autonomy for those they conquer.",
  },
  {
    value: "Eldar",
    faction: "Craftworld Eldar",
    image: "https://warhammeruniverse.com/wp-content/uploads/2023/10/W1.jpeg",
    description:
      "The Eldar are an ancient and highly advanced race that once ruled the galaxy before their downfall. Long ago, they were the pinnacle of civilization, mastering not only technology but also psychic powers that allowed them to shape the fabric of reality itself. However, their excesses and hubris led to the birth of the Chaos God Slaanesh, causing the fall of their empire and the destruction of much of their race. Now, the Eldar are a fragmented people, living on massive craftworlds that drift through the galaxy. Despite their fractured state, they remain a powerful force, with highly trained warriors, powerful psykers, and devastating weaponry. The Eldar fight to preserve what little is left of their race, often in opposition to the forces of Chaos, the Imperium, and any other threat that would see them extinct. Their advanced knowledge and psychic abilities make them a formidable foe, though their numbers have dwindled considerably.",
  },
  {
    value: "Necron",
    faction: "Necron Dynasty",
    image:
      "https://www.gamereplays.org/community/uploads/post-238447-1495055480.png",
    description:
      "The Necrons are an ancient and terrifying race of living metal warriors, who were once a flesh-and-blood species known as the Necrontyr. Eons ago, they made a pact with the C'tan, star-gods of unimaginable power, in exchange for immortality. The Necrons traded their souls and their organic bodies for metal shells, becoming cold, emotionless entities with only one goal: to reclaim the galaxy from the younger races. With their highly advanced technology and deadly weaponry, the Necrons are a force to be reckoned with. They can reanimate fallen warriors and manipulate time itself, making them nearly unstoppable. The Necrons seek to restore their once-glorious empire and erase all traces of the other races that inhabit the galaxy, viewing them as mere interlopers in a domain that rightfully belongs to the Necron Dynasties.",
  },
  {
    value: "Adepta Sororitas",
    faction: "Ecclesiarchy",
    image:
      "https://img.freepik.com/premium-photo/warhammer-40k-adepta-sororitas-sisters-battle-character_1035036-18607.jpg?w=360",
    description:
      "The Adepta Sororitas, also known as the Sisters of Battle, are an all-female military order within the Ecclesiarchy, the religious arm of the Imperium. These fierce warriors are fanatically loyal to the Emperor and the Imperial Cult, fighting in holy wars to defend the faith and protect humanity. Their unyielding devotion to the Emperor is matched only by their martial prowess, as they wield powerful weapons and wear advanced power armor. The Sisters of Battle engage in relentless battles against heretics, xenos, and the forces of Chaos, and are often deployed to purge entire worlds of corruption. Their faith in the Emperor grants them supernatural abilities, and they are considered living saints in the eyes of the Imperium. They are both revered and feared, known for their unshakeable will and their readiness to make any sacrifice in the name of the Emperor.",
  },
  {
    value: "Adeptus Custodes",
    faction: "Imperial Palace",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2024/04/00181-1028464452-copy-1707x2048.jpeg.webp",
    description:
      "The Adeptus Custodes are the elite guardians of the Emperor himself. These genetically enhanced warriors are more powerful than even the Space Marines, and they are tasked with the sacred duty of protecting the Emperor within the Imperial Palace. Unlike other Imperial forces, the Custodes serve a singular purpose: to defend the Emperor with their lives. They are ancient warriors, known for their unmatched combat skills and tactical brilliance. The Custodes are chosen from the best and most loyal warriors, and they undergo intense training and genetic modification to ensure they are the perfect protectors. Their numbers are small, but their strength and authority are immense. To be chosen as one of the Emperor’s Custodians is the highest honor, as they are the very shield that stands between the Emperor and the endless dangers that threaten the Imperium.",
  },
  {
    value: "Imperial Knight",
    faction: "Noble Houses of the Imperium",
    image:
      "https://i0.wp.com/objectivesecured.com.au/wp-content/uploads/2017/06/119ee5ede9f32ea1ad5b3ab02bc29b32.jpg?resize=260%2C300&ssl=1",
    description:
      "Imperial Knights are massive, towering war machines piloted by the noble houses of the Imperium. These colossal engines of destruction are far more powerful than most tanks, equipped with devastating weaponry and towering over any battlefield. The Knights are a symbol of the power and authority of the Imperium’s noble families, each one piloted by a noble scion who has trained for years in the arts of combat and strategy. The Imperial Knights are used to defend the Imperium's territories from both xenos invasions and internal rebellion. They are often deployed in the most critical battles, where their size and firepower give them a decisive advantage. Although their pilots are few in number, they are among the most skilled and heavily armored warriors in the galaxy.",
  },
  {
    value: "Genestealer Cult",
    faction: "Tyranid Cults",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2023/11/00007-3351530214-1024x700.png",
    description:
      "The Genestealer Cults are insidious and covert organizations that work to bring about the Tyranid invasion from within human society. These cults begin when Genestealers—alien creatures that are part of the Tyranid fleet—infect a planet's inhabitants, altering their genetic makeup and turning them into devoted worshippers of the Tyranids. These cultists infiltrate human societies, corrupting political, religious, and military institutions to spread the Tyranid influence and prepare worlds for the inevitable consumption by the Tyranid swarm. The Genestealer Cults are masters of subversion, operating in secret while their influence slowly grows. When the Tyranid swarm arrives, the cults rise from the shadows and unleash chaos, ensuring the world is consumed in the name of their alien masters.",
  },
  {
    value: "Slaanesh",
    faction: "Chaos Gods",
    image:
      "https://www.creativefabrica.com/wp-content/uploads/2022/11/28/Arch-Demon-God-Underworld-Reclaim-Throne-Characters-Wandering-Showing-Off-48999340-1.png",
    description:
      "Slaanesh is the Chaos God of excess, indulgence, and sensory pleasure. This deity represents the pursuit of hedonistic satisfaction to its fullest extent, whether through the pursuit of luxury, fame, beauty, or pain. Slaanesh is a being of unimaginable beauty and terrifying excess, a symbol of the chaotic pursuit of desires that ultimately leads to destruction. Known as the Dark Prince or the God of Pleasure, Slaanesh’s followers are often obsessed with the pursuit of personal gratification, no matter the cost. From decadent palaces to depraved acts, Slaanesh’s devotees are consumed by the need to experience pleasure in all its forms, with no regard for the consequences. They are often powerful individuals, but their addictions and desires slowly drive them mad, as they seek the next high or indulgence, unable to find satisfaction.",
  },
  {
    value: "Khorne",
    faction: "Chaos Gods",
    image: "https://www.gamereactor.eu/media/93/totalwar_3859343_650x.jpg",
    description:
      "Khorne is the Chaos God of war, violence, and bloodshed. Known as the Blood God, Khorne is the embodiment of rage, anger, and the unrelenting drive for battle. He delights in the destruction of his enemies through blood-soaked warfare, reveling in the clash of weapons and the roar of battle. Khorne’s followers are warriors above all else, driven by an insatiable thirst for combat and slaughter. His warriors, known as the Khorne Berzerkers, are notorious for their ferocity and ruthlessness, seeking only to spill blood in his name. Unlike other Chaos Gods, Khorne cares little for the subtleties of ambition or manipulation. To him, the only thing that matters is combat, bloodshed, and the dominance of his warriors on the battlefield.",
  },
  {
    value: "Tzeentch",
    faction: "Chaos Gods",
    image:
      "https://img.freepik.com/fotos-premium/hino-do-abismo_636537-73152.jpg?w=740",
    description:
      "Tzeentch is the Chaos God of change, knowledge, and manipulation. Known as the Changer of Ways, Tzeentch represents the endless flow of time, the constant reshaping of reality, and the web of intricate schemes and plots that unfold throughout the universe. Followers of Tzeentch are often powerful sorcerers and manipulators, using their knowledge of magic and deceit to advance their own agendas. Tzeentch's influence is subtle yet pervasive, as he thrives on altering the course of events, twisting destinies, and shaping the future according to his whims. His followers are often involved in intricate political schemes, using their power to subtly shift the balance of power in the galaxy. Tzeentch is the god of constant flux and evolution, embodying the idea that everything is subject to change, even the very fabric of reality.",
  },
  {
    value: "Nurgle",
    faction: "Chaos Gods",
    image:
      "https://static.wikia.nocookie.net/warhammer40k/images/3/3c/Warhammer_40k_Nurgle_Champion.png/revision/latest/scale-to-width-down/350?cb=20170705160329",
    description:
      "Nurgle is the Chaos God of decay, disease, and death. Known as the Plague Lord or the Grandfather of Disease, Nurgle represents the inevitability of decay, both physical and spiritual. His followers embrace suffering, pestilence, and the slow, inevitable march toward death. To Nurgle’s devotees, disease is not something to be feared but something to be welcomed, as it is a sign of Nurgle’s favor. His Plague Marines are warriors twisted by rot and disease, their bodies constantly decaying and regenerating in a grotesque cycle. Nurgle’s influence spreads like a sickness, corrupting everything it touches, and his followers find comfort in the understanding that nothing in the universe can escape the slow decay of time. Nurgle’s power lies not in immediate destruction, but in the slow, insidious spread of rot and corruption that eventually consumes all.",
  },
  {
    value: "Dark Eldar",
    faction: "Commorragh",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2023/12/00084-3935359861-1.png.webp",
    description:
      "The Dark Eldar are a sadistic and depraved offshoot of the Eldar race, who chose to abandon the paths of enlightenment in favor of hedonism, cruelty, and sadism. They inhabit the dark, twisted city of **Commorragh**, a dimension separate from realspace that exists within the webway, a labyrinth of tunnels that link the farthest reaches of the galaxy. The Dark Eldar, led by their Archons and succubi, perpetuate endless cycles of torture, slavery, and debauchery. Their primary motivation is the need to steal the souls of others to sustain themselves, as they are cursed with eternal suffering due to the fall of their race. They conduct raids on other civilizations, capturing slaves to torture and feed on their misery, all while making use of their technological and psychic superiority. Their ruthless and insidious nature makes them one of the most feared factions in the galaxy, as their cruelty knows no bounds, and they will stop at nothing to satisfy their insatiable thirst for pain and suffering.",
  },
  {
    value: "Inquisitor",
    faction: "Inquisition",
    image:
      "https://www.gamereactor.eu/media/74/fuserwarhammer40_000_3387433_650x.jpg",
    description:
      "An **Inquisitor** is a high-ranking agent of the **Inquisition**, a secretive and powerful organization within the **Imperium of Man**, tasked with defending the Imperium from heresy, corruption, and threats from both within and beyond. Inquisitors wield almost unlimited power, acting with the authority of the Emperor Himself. They have the right to purge entire worlds, communities, or even planets, should they deem them to be infected by heresy, alien influence, or chaos corruption. They are often tasked with investigating mysterious and dangerous phenomena, using any means necessary to uncover the truth, whether that be torture, espionage, or open warfare. The Inquisition is divided into various Ordos (such as the Ordo Hereticus, Ordo Xenos, and Ordo Malleus), each focused on different threats. Inquisitors operate with total autonomy, and their methods are as varied as their personalities, ranging from ruthless purges to subtle political maneuvering. Though their methods can be harsh, Inquisitors see themselves as the Imperium's last line of defense against forces that would destroy humanity.",
  },
  {
    value: "Saint Celestine",
    faction: "Adepta Sororitas",
    image:
      "https://preview.redd.it/saint-celestine-from-warhammer-40k-v0-p4oggj9eg6ub1.png?width=1024&format=png&auto=webp&s=9e70a4ed71e5a1f6ce27017588728fca307dd13d",
    description:
      "**Saint Celestine** is a legendary figure within the **Adepta Sororitas**, also known as the **Sisters of Battle**, and is revered as a living saint within the **Imperium of Man**. Known for her unwavering faith, Celestine is a beacon of hope and inspiration, leading her Sisters into countless battles with unmatched fervor and devotion to the Emperor. She is believed to be the vessel of the Emperor’s divine will, and her presence on the battlefield often signals a miraculous turnaround in the face of seemingly insurmountable odds. Celestine has the ability to return from death, having been resurrected multiple times, and her very existence is a testament to the Emperor’s power. Clad in golden armor and wielding the **Geminae Superia**, two powerful and loyal warrior companions, Saint Celestine is not only a spiritual leader but also a formidable combatant, capable of cutting down entire armies in the Emperor’s name. Her legend inspires countless individuals across the Imperium, and her faith is an unshakeable force that drives the Adepta Sororitas to fight on, even in the darkest of times.",
  },
  {
    value: "Belisarius Cawl",
    faction: "Adeptus Mechanicus",
    image:
      "https://warhammeruniverse.com/wp-content/uploads/2024/08/00152-1623129629-1024x1024.jpeg.webp",
    description:
      "**Belisarius Cawl** is a revered Archmagos Dominus of the **Adeptus Mechanicus**, the religious and scientific order that worships the Omnissiah (the Emperor, in their belief) and seeks to unlock the secrets of technology and machine mastery. Cawl is one of the most brilliant and influential figures in the galaxy, known for his unmatched knowledge of both ancient and cutting-edge technologies. He is most famously credited with the creation of the **Primaris Space Marines**, a new generation of genetically enhanced super-soldiers that are stronger, faster, and more resilient than their predecessors. Cawl’s work has forever changed the future of the Adeptus Astartes, and his role in their creation is seen as a divine act in the eyes of the Mechanicus. Cawl’s intellect and expertise extend far beyond the creation of the Primaris Marines, however. He is a master of arcane technologies, from the creation of devastating weapons to the augmentation of human physiology. His contributions have greatly strengthened the Imperium's technological capabilities, but his true motives remain mysterious, and some question whether Cawl's obsession with the Omnissiah has led him to pursue dangerous, forbidden knowledge in his quest for understanding. Regardless, his work is vital to the Imperium’s survival, and he continues to shape the future of mankind’s technological dominance.",
  },
];

const newChar = new Char("test", "test", "test", "test");

characters.push(newChar);

if (characters.length >= 0) {
  const pos = characters.length - 1;
}

export const onlyFactions = characters.reduce((acc: any, character: any) => {
  const faction: any = character.faction;
  const onlyFactions = !acc.includes(faction) ? [...acc, faction] : acc;
  return onlyFactions;
}, []);
console.log("FACÇÕES: ", onlyFactions);

export default characters;

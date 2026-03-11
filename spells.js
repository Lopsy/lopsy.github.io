
function Creature(name, color, p, t, text) {}
function Enchart(name, color, text) {}
function Spell(name, color, text) {}
var Nothing = "nothing"

var Spells = new Map();

Spells["Stompy", "W"] = function (mv) {Creature("Cat", "W", mv, mv, "Lifelink")}
Spells["Stompy", "U"] = function (mv) {Creature("Bird", "U", mv, mv, "Flying")}
Spells["Stompy", "B"] = function (mv) {Creature("Demon", "B", mv, mv, "Menace; Can block an additional creature")}
Spells["Stompy", "R"] = function (mv) {Creature("Goblin", "R", mv-1, mv-1, "Double strike")}
Spells["Stompy", "G"] = function (mv) {Creature("Beast", "G", mv, mv, "Reach, Trample")}

function ValueP(mv) {return Math.floor(mv/3) + mv%3}
function ValueV(mv) {return Math.floor(mv/3)}

Spells["Value", "W"] = function (mv) {Creature("Angel", "W", ValueP(mv), ValueP(mv), "Flying, Vigilance\nOpponents' crimes cost {"+ValueV(mv)+"} more.")}
Spells["Value", "U"] = function (mv) {Creature("Wizard", "U", ValueP(mv), ValueP(mv), "Choose between "+ValueV(mv)+" additional spells when drawing for your turn.")}
Spells["Value", "B"] = function (mv) {Creature("Vampire", "B", ValueP(mv), ValueP(mv), "At your end step, each opponent loses "+ValueV(mv)+ "life and you gain "+ValueV(mv)+" life.")}
Spells["Value", "R"] = function (mv) {Creature("Warrior", "R", ValueP(mv), ValueP(mv), "Haste; {T}: This deals "+ValueV(mv)+" damage to any target.")}
Spells["Value", "G"] = function (mv) {Creature("Elf", "G", ValueP(mv), ValueP(mv), "{T}: Add "+ValueV(mv)+" mana of any color.")}

Spells["Removal"] = function (mv) {Spell("Removal", "-", "Destroy target creature.\nKicker {3}: Instead exile any permanent, & this can't be prevented by protection/counterspells/etc.\nKicker {3}: Draw a card.")}

Spells["Spell", "W1"] = function (mv) {mv >= 5 ? Spell("Martial Coup", "W", "Destroy all creatures. Create "+(mv-2)+" 1/1 Soldiers.") : Nothing}
Spells["Spell", "W2"] = function (mv) {mv >= 5 ? Spell("Entreat the Angels", "W", "Create "+Math.floor((mv-3)/2))+" 4/4 flying Angels.") : Nothing}

Spells["Spell", "U1"] = function (mv) {Spell("Blue Sun's Twilight*", "U", "Gain control of target nonland permanent with mana value X or less. If its mana value is X/2 or less, create a copy of it. (X="+(mv-2)+")")}
Spells["Spell", "U2"] = function (mv) {Spell("Vacuumelt*", "U", "Return up to X target nonland permanents to its owner's hand. (X="+Math.floor(mv/3)+")"}

Spells["Spell", "B1"] = function (mv) {Spell("Black Sun's Zenith", "B", "Put X -1/-1 counters on each creature. (X<="+(mv-2)+")")}
Spells["Spell", "B2"] = function (mv) {Spell("Torment of Hailfire", "B", "Repeat the following procedure X times. Each opponent loses 3 life unless that player sacrifices a nonland permanent or discards a card. (X="+(mv-2)+")")}

Spells["Spell", "R2"] = function (mv) {Spell("Rolling Thunder*", "R", "Deal X damage divided as you choose among any number of targets. (X="+(mv-2)+")"}
Spells["Spell", "R1"] = Spells["Spell", "R2"]

Spells["Spell", "G1"] = function (mv) {Spell("Grove's Bounty", "G", Distribute X +1/+1 counters among any number of target creatures. (X="+(mv-1)+")")}
Spells["Spell", "G2"] = function (mv) {Spell("Gelatinous Genesis", "G", "Create X X/X Oozes. (X="+Math.floor((mv-1)/2)+")"}

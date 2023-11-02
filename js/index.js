//JSON PATHS
const bardingPath = "JSON/heroic-cultures/barding.json";
const breeManPath = "JSON/heroic-cultures/breeMan.json";
const dwarfPath = "JSON/heroic-cultures/dwarf.json";
const elfPath = "JSON/heroic-cultures/elf.json";
const hobbitPath = "JSON/heroic-cultures/hobbit.json";
const rangerPath = "JSON/heroic-cultures/ranger.json";
const captainPath = "JSON/callings/captain.json";
const championPath = "JSON/callings/champion.json";
const messengerPath = "JSON/callings/messenger.json";
const scholarPath = "JSON/callings/scholar.json";
const treasureHunterPath = "JSON/callings/treasureHunter.json";
const wardenPath = "JSON/callings/warden.json";
const armourPath = "JSON/starting-gear/armour.json";
const shieldsPath = "JSON/starting-gear/shields.json";
const weaponsPath = "JSON/starting-gear/weapons.json";
const rewardsPath = "JSON/starting-rewards.json";
const virtuesPath = "JSON/starting-virtues.json";

// INPUTS
const nameInput = $("#charname");
const ageInput = $("#charage");
const cultureInput = $("#cultureSelection");
const callingInput = $("#callingSelection");
var aweExperienceInputs = $("input[id^=awe-choice]");
var athleticsExperienceInputs = $("input[id^=athletics-choice]");
var awarenessExperienceInputs = $("input[id^=awareness-choice]");
var huntingExperienceInputs = $("input[id^=hunting-choice]");
var songExperienceInputs = $("input[id^=song-choice]");
var craftExperienceInputs = $("input[id^=craft-choice]");
var enheartenExperienceInputs = $("input[id^=enhearten-choice]");
var travelExperienceInputs = $("input[id^=travel-choice]");
var insightExperienceInputs = $("input[id^=insight-choice]");
var healingExperienceInputs = $("input[id^=healing-choice]");
var courtesyExperienceInputs = $("input[id^=courtesy-choice]");
var battleExperienceInputs = $("input[id^=battle-choice]");
var persuadeExperienceInputs = $("input[id^=persuade-choice]");
var stealthExperienceInputs = $("input[id^=stealth-choice]");
var scanExperienceInputs = $("input[id^=scan-choice]");
var exploreExperienceInputs = $("input[id^=explore-choice]");
var riddleExperienceInputs = $("input[id^=riddle-choice]");
var loreExperienceInputs = $("input[id^=lore-choice]");
var bowsExperienceInputs = $("input[id^=bows-choice]");
var swordsExperienceInputs = $("input[id^=swords-choice]");
var axesExperienceInputs = $("input[id^=axes-choice]");
var spearsExperienceInputs = $("input[id^=spears-choice]");
var experienceInputs = $("input[type=radio]");
var attributeSelection = $("#attributeSelection");
const aweFavoredInput = $("#awe-check");
const athleticsFavoredInput = $("#athletics-check");
const awarenessFavoredInput = $("#awareness-check");
const huntingFavoredInput = $("#hunting-check");
const songFavoredInput = $("#song-check");
const craftFavoredInput = $("#craft-check");
const enheartenFavoredInput = $("#enhearten-check");
const travelFavoredInput = $("#travel-check");
const insightFavoredInput = $("#insight-check");
const healingFavoredInput = $("#healing-check");
const courtesyFavoredInput = $("#courtesy-check");
const battleFavoredInput = $("#battle-check");
const persuadeFavoredInput = $("#persuade-check");
const stealthFavoredInput = $("#stealth-check");
const scanFavoredInput = $("#scan-check");
const exploreFavoredInput = $("#explore-check");
const riddleFavoredInput = $("#riddle-check");
const loreFavoredInput = $("#lore-check");
var favoredSkillSelection = $("#favoredSkillSelection");
var axesSelection = $("#axesSelection");
var bowsSelection = $("#bowsSelection");
var swordsSelection = $("#swordsSelection");
var spearsSelection = $("#spearsSelection");
var armourSelection = $("#armourSelection");
var shieldSelection = $("#shieldSelection");
var helmToggle = $("#usehelm");
const rewardSelection = $("#rewardSelection");
const virtueSelection = $("#virtueSelection");
var proficiencySelection1 = $("proficiencySelection1");
var proficiencySelection2 = $("proficiencySelection2");
var axesBox = $("#axesBox");
var bowsBox = $("#bowsBox");
var swordsBox = $("#swordsBox");
var spearsBox = $("#spearsBox");
var distinctiveFeature1 = $("#distinctiveFeature1");
var distinctiveFeature2 = $("#distinctiveFeature2");


// OUTPUTS
const nameText = $("#nameText");
const ageText = $("#ageText");
const cultureText = $("#cultureText");
const blessingText = $("#blessingText");
const flawText = $("#flawText");
const shadowPathText = $("#shadowPathText");
const callingText = $("#callingText");
const distinctiveFeatureText = $("#distinctiveFeatureText");
const aweLevelText = $("#awe-levelText");
const athleticsLevelText = $("#athletics-levelText");
const awarenessLevelText = $("#awareness-levelText");
const huntingLevelText = $("#hunting-levelText");
const songLevelText = $("#song-levelText");
const craftLevelText = $("#craft-levelText");
const enheartenLevelText = $("#enhearten-levelText");
const travelLevelText = $("#travel-levelText");
const insightLevelText = $("#insight-levelText");
const healingLevelText = $("#healing-levelText");
const courtesyLevelText = $("#courtesy-levelText");
const battleLevelText = $("#battle-levelText");
const persuadeLevelText = $("#persuade-levelText");
const stealthLevelText = $("#stealth-levelText");
const scanLevelText = $("#scan-levelText");
const exploreLevelText = $("#explore-levelText");
const riddleLevelText = $("#riddle-levelText");
const loreLevelText = $("#lore-levelText");
const axesLevelText = $("#axes-levelText");
const bowsLevelText = $("#bows-levelText");
const spearsLevelText = $("#spears-levelText");
const swordsLevelText = $("#swords-levelText");
const strengthRatingText = $("#strengthRatingText");
const strengthTnText = $("#strengthTnText");
const enduranceText = $("#enduranceText");
const heartRatingText = $("#heartRatingText");
const heartTnText = $("#heartTnText");
const hopeText = $("#hopeText");
const witsRatingText = $("#witsRatingText");
const witsTnText = $("#witsTnText");
const parryText = $("#parryText");
const warGearList = $("#warGearList");
const armourText = $("#armourText");
const helmText = $("#helmText");
const shieldText = $("#shieldText");
const rewardsList = $("#rewardsList");
const virtuesList = $("#virtuesList");
var skillPointsText = $("#skillPointsText");

// EXPERIENCE SYSTEM
var skillPoints = 10;
var lastRadio = null;
const skillUpgradeCost = [1,2,3,5];
const combatUpgradeCost = [2,4,6];
var lastRadios = {
    aweLastRadio: null, 
    athleticsLastRadio: null,
    awarenessLastRadio: null,
    huntingLastRadio: null,
    songLastRadio: null,
    craftLastRadio: null,
    enheartenLastRadio: null,
    travelLastRadio: null,
    insightLastRadio: null,
    healingLastRadio: null,
    courtesyLastRadio: null,
    battleLastRadio: null,
    persuadeLastRadio: null,
    stealthLastRadio: null,
    scanLastRadio: null,
    exploreLastRadio: null,              
    riddleLastRadio: null,
    loreLastRadio: null,
    bowsLastRadio: null,
    swordsLastRadio: null,
    axesLastRadio: null,
    spearsLastRadio: null,  
}
//Prosperity
var cultureProsperity = "prosperous";

// INITITALIZATION
$(function() {
    let culture = "barding";
    loadCultureBox(culture);
    loadExperienceBox(culture);
    // loadGearBox();
 });

// Generate character when user presses button
$("#genCharButton").click(() => {
    resetCharSheet();
    nameText.append(nameInput.val());
    ageText.append(ageInput.val());

    cultureText.append(cultureInput.val());
    getCulturalInfo();
    distinctiveFeatureText.append(`${distinctiveFeature1.val()}, `);
    distinctiveFeatureText.append(`${distinctiveFeature2.val()}, `);
    getAttributes();

    callingText.append(callingInput.val());
    getCallingInfo();

    getExperiences();
    getWarGear();
    getArmour();
    getHelm();
    getShield();

    getStartingReward();
    getStartingVirtue();
})


// Load new culture inputs when form changes
cultureInput.change(() => {
    let culture = getCulture();
    loadCultureBox(culture);
    loadExperienceBox(culture);
    // loadGearBox();
})

// FUNCTIONS

function upgradeExperience(lowRank, highRank, event) {
    let totalCost = 0;
    upgradeSteps = highRank - lowRank;
    
    if (event.target.name === "bows-experience" || event.target.name === "swords-experience" ||
    event.target.name === "axes-experience" || event.target.name === "spears-experience") {
        for (let index = 0; index < upgradeSteps; index++) {
            totalCost += combatUpgradeCost[lowRank+index]
        }
    } else {
        for (let index = 0; index < upgradeSteps; index++) {
            totalCost += skillUpgradeCost[lowRank+index]
        }
    }
    
    let lastRadio = getLastRadio(event.target.name)  

    if (totalCost > skillPoints) {
        alert("Not enought skill points!");
        refundPoints(lowRank, lastRadio.value, event);
        lastRadio.click();
    } else {
        skillPoints -= totalCost;
        setLastRadio(event.target.name, event.target);
    }
}

function refundPoints(defaultRank, rankToRefund, event) {
    let totalRefund = 0;
    upgradeSteps = rankToRefund - defaultRank;
    if (event.target.name === "bows-experience" || event.target.name === "swords-experience" ||
    event.target.name === "axes-experience" || event.target.name === "spears-experience") {
        for (let index = 0; index < upgradeSteps; index++) {
            totalRefund += combatUpgradeCost[defaultRank+index]
        }
    } else {
        for (let index = 0; index < upgradeSteps; index++) {
            totalRefund += skillUpgradeCost[defaultRank+index]
        }
    }
    
    skillPoints += totalRefund;
}

function getLastRadio(experienceType) {
    switch (experienceType) {
        case "awe-experience":
            return lastRadios.aweLastRadio;
        case "athletics-experience":
            return lastRadios.athleticsLastRadio;
        case "awareness-experience":
            return lastRadios.awarenessLastRadio;
        case "hunting-experience":
            return lastRadios.huntingLastRadio;
        case "song-experience":
            return lastRadios.songLastRadio;
        case "craft-experience":
            return lastRadios.craftLastRadio;
        case "enhearten-experience":
            return lastRadios.enheartenLastRadio;
        case "travel-experience":
            return lastRadios.travelLastRadio;
        case "insight-experience":
            return lastRadios.insightLastRadio;
        case "healing-experience":
            return lastRadios.healingLastRadio;
        case "courtesy-experience":
            return lastRadios.courtesyLastRadio;
        case "battle-experience":
            return lastRadios.battleLastRadio;
        case "persuade-experience":
            return lastRadios.persuadeLastRadio;
        case "stealth-experience":
            return lastRadios.stealthLastRadio;
        case "scan-experience":
            return lastRadios.scanLastRadio;
        case "explore-experience":
            return lastRadios.exploreLastRadio;
        case "riddle-experience":
            return lastRadios.riddleLastRadio;
        case "lore-experience":
            return lastRadios.loreLastRadio;
        case "bows-experience":
            return lastRadios.bowsLastRadio;
        case "swords-experience":
            return lastRadios.swordsLastRadio;
        case "axes-experience":
            return lastRadios.axesLastRadio;
        case "spears-experience":
            return lastRadios.spearsLastRadio;
        default:
            return null;
    }
}

function setLastRadio(experienceType, newLastRadio) {
    switch (experienceType) {
        case "awe-experience":
            lastRadios.aweLastRadio = newLastRadio;
            break;
        case "athletics-experience":
            lastRadios.athleticsLastRadio = newLastRadio;
            break;
        case "awareness-experience":
            lastRadios.awarenessLastRadio = newLastRadio;
            break;
        case "hunting-experience":
            lastRadios.huntingLastRadio = newLastRadio;
            break;
        case "song-experience":
            lastRadios.songLastRadio = newLastRadio;
            break;
        case "craft-experience":
            lastRadios.craftLastRadio = newLastRadio;
            break;
        case "enhearten-experience":
            lastRadios.enheartenLastRadio = newLastRadio;
            break;
        case "travel-experience":
            lastRadios.travelLastRadio = newLastRadio;
            break;
        case "insight-experience":
            lastRadios.insightLastRadio = newLastRadio;
            break;
        case "healing-experience":
            lastRadios.healingLastRadio = newLastRadio;
            break;
        case "courtesy-experience":
            lastRadios.courtesyLastRadio = newLastRadio;
            break;
        case "battle-experience":
            lastRadios.battleLastRadio = newLastRadio;
            break;
        case "persuade-experience":
            lastRadios.persuadeLastRadio = newLastRadio;
            break;
        case "stealth-experience":
            lastRadios.stealthLastRadio = newLastRadio;
            break;
        case "scan-experience":
            lastRadios.scanLastRadio = newLastRadio;
            break;
        case "explore-experience":
            lastRadios.exploreLastRadio = newLastRadio;
            break;
        case "riddle-experience":
            lastRadios.riddleLastRadio = newLastRadio;
            break;
        case "lore-experience":
            lastRadios.loreLastRadio = newLastRadio;
            break;
        case "bows-experience":
            lastRadios.bowsLastRadio = newLastRadio;
            break;
        case "swords-experience":
            lastRadios.swordsLastRadio = newLastRadio;
            break;
        case "axes-experience":
            lastRadios.axesLastRadio = newLastRadio;
            break;
        case "spears-experience":
            lastRadios.spearsLastRadio = newLastRadio;
            break;
        default:
            break;
    }
}

function getCallingInfo() {
    switch (callingInput.val()) {
        case "Captain":
            $.getJSON(captainPath, (data) => {
                shadowPathText.append(data.shadowPath);
                distinctiveFeatureText.append(data.distinctiveFeature);
            });
            break;
        case "Champion":
            $.getJSON(championPath, (data) => {
                shadowPathText.append(data.shadowPath);
                distinctiveFeatureText.append(data.distinctiveFeature);
            });
            break;
        case "Messenger":
            $.getJSON(messengerPath, (data) => {
                shadowPathText.append(data.shadowPath);
                distinctiveFeatureText.append(data.distinctiveFeature);
            });
            break;
        case "Scholar":
            $.getJSON(scholarPath, (data) => {
                shadowPathText.append(data.shadowPath);
                distinctiveFeatureText.append(data.distinctiveFeature);
            });
            break;
        case "Treasure Hunter":
            $.getJSON(treasureHunterPath, (data) => {
                shadowPathText.append(data.shadowPath);
                distinctiveFeatureText.append(data.distinctiveFeature);
            });
            break;
        case "Warden":
            $.getJSON(wardenPath, (data) => {
                shadowPathText.append(data.shadowPath);
                distinctiveFeatureText.append(data.distinctiveFeature);
            });
            break;
        default:
            break;
    }
}

function getCulturalInfo() {
    switch (cultureInput.val()) {
        case "Barding":
            $.getJSON(bardingPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append("None");
                setFavoredSkill(favoredSkillSelection.val());
            });
            break;
        case "Dwarf of Durin's Folk":
            $.getJSON(dwarfPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append(data.flaw.flawName);
                setFavoredSkill(favoredSkillSelection.val());
            });
            break;
        case "Elf of Lindon":
            $.getJSON(elfPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append(data.flaw.flawName);
                setFavoredSkill(favoredSkillSelection.val());
            });
            break;
        case "Hobbit of The Shire":
            $.getJSON(hobbitPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append(data.flaw.flawName);
                setFavoredSkill(favoredSkillSelection.val());
            });
            break;
        case "Man of Bree":
            $.getJSON(breeManPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append("None");
                setFavoredSkill(favoredSkillSelection.val());
            });
            break;
        case "Rangers of The North":
            $.getJSON(rangerPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append(data.flaw.flawName);
                setFavoredSkill(favoredSkillSelection.val());
            });
            break;
        default:
            break;
    }
}

function resetCharSheet() {
    nameText.html("Name: ");
    ageText.html("Age: ");
    cultureText.html("Heroic Culture: ");
    blessingText.html("Cultural Blessing: ");
    flawText.html("Flaws: ");
    callingText.html("Calling: ");
    shadowPathText.html("Shadow Path: ")
    distinctiveFeatureText.html("Distinctive Features: ")

    strengthRatingText.html("Strength Rating: ");
    strengthTnText.html("Strength TN: ");
    enduranceText.html("Endurance: "); 
    heartRatingText.html("Heart Rating: ");
    heartTnText.html("Heart TN: ");
    hopeText.html("Hope: ");
    witsRatingText.html("Wits Rating: ");
    witsTnText.html("Wits TN: ");
    parryText.html("Parry: ");

    aweLevelText.html("Awe: ");
    athleticsLevelText.html("Athletics: ");
    awarenessLevelText.html("Awareness: ");
    huntingLevelText.html("Hunting: ");
    songLevelText.html("Song: ");
    craftLevelText.html("Craft: ");
    enheartenLevelText.html("Enhearten: ");
    travelLevelText.html("Travel: ");
    insightLevelText.html("Insight: ");
    healingLevelText.html("Healing: ");
    courtesyLevelText.html("Courtesy: ");
    battleLevelText.html("Battle: ");
    persuadeLevelText.html("Persuade: ");
    stealthLevelText.html("Stealth: ");
    scanLevelText.html("Scan: ");
    exploreLevelText.html("Explore: ");
    riddleLevelText.html("Riddle: ");
    loreLevelText.html("Lore: ");
    axesLevelText.html("Axes: ");
    bowsLevelText.html("Bows: ");
    spearsLevelText.html("Spears: ");
    swordsLevelText.html("Swords: ");

    resetSkillChecks();

    warGearList.html("");
    armourText.html("Armour: ");
    helmText.html("Helm: ");
    shieldText.html("Shield: ");
    rewardsList.html("");
    virtuesList.html("");
}

function resetSkillChecks() {
    let favoredChecks = $("input[disabled]");
    for (let i = 0; i < favoredChecks.length; i++) {
        favoredChecks[i].checked = false;
    }
}

function getExperiences() {
    aweLevelText.append(findChosenExperience(aweExperienceInputs));
    athleticsLevelText.append(findChosenExperience(athleticsExperienceInputs));
    awarenessLevelText.append(findChosenExperience(awarenessExperienceInputs));
    huntingLevelText.append(findChosenExperience(huntingExperienceInputs));
    songLevelText.append(findChosenExperience(songExperienceInputs));
    craftLevelText.append(findChosenExperience(craftExperienceInputs));
    enheartenLevelText.append(findChosenExperience(enheartenExperienceInputs));
    travelLevelText.append(findChosenExperience(travelExperienceInputs));
    insightLevelText.append(findChosenExperience(insightExperienceInputs));
    healingLevelText.append(findChosenExperience(healingExperienceInputs));
    courtesyLevelText.append(findChosenExperience(courtesyExperienceInputs));
    battleLevelText.append(findChosenExperience(battleExperienceInputs));
    persuadeLevelText.append(findChosenExperience(persuadeExperienceInputs));
    stealthLevelText.append(findChosenExperience(stealthExperienceInputs));
    scanLevelText.append(findChosenExperience(scanExperienceInputs));
    exploreLevelText.append(findChosenExperience(exploreExperienceInputs));
    riddleLevelText.append(findChosenExperience(riddleExperienceInputs));
    loreLevelText.append(findChosenExperience(loreExperienceInputs));
    axesLevelText.append(findChosenExperience(axesExperienceInputs));
    bowsLevelText.append(findChosenExperience(bowsExperienceInputs));
    spearsLevelText.append(findChosenExperience(spearsExperienceInputs));
    swordsLevelText.append(findChosenExperience(swordsExperienceInputs));
}

function getAttributes() {
    switch (cultureInput.val()) {
        case "Barding":
            $.getJSON(bardingPath, setAttributes);
            break;
        case "Dwarf of Durin's Folk":
            $.getJSON(dwarfPath, setAttributes);
            break;
        case "Elf of Lindon":
            $.getJSON(elfPath, setAttributes);
            break;
        case "Hobbit of The Shire":
            $.getJSON(hobbitPath, setAttributes);
            break;
        case "Man of Bree":
            $.getJSON(breeManPath, setAttributes);
            break;
        case "Rangers of The North":
            $.getJSON(rangerPath, setAttributes);
            break;
        default:
            break;
    }
}

function getCulture() {
    switch (cultureInput.val()) {
        case "Barding":
            return "barding";
        case "Dwarf of Durin's Folk":
            return "dwarf";
        case "Elf of Lindon":
            return "elf";
        case "Hobbit of The Shire":
            return "hobbit";
        case "Man of Bree":
            return "breeMan";
        case "Rangers of The North":
            return "ranger";
        default:
            break;
    }
}

function getWarGear() {
    $.getJSON(weaponsPath, (weapons) => {
        let axe = weapons.find((axe) => axe.name === axesSelection.val());
        let bow = weapons.find((bow) => bow.name === bowsSelection.val());
        let sword = weapons.find((sword) => sword.name === swordsSelection.val());
        let spear = weapons.find((spears) => spears.name === spearsSelection.val());
        if (axe != null) {
            warGearList.append("<li>"+ axe.name + 
            "/DMG: " + axe.damage + 
            "/INJURY: " + axe.injury + 
            "/LOAD: " + axe.load + 
            "/NOTES: " + axe.notes + "</li>");
        }
        if (bow != null) {
            warGearList.append("<li>"+ bow.name + 
            "/DMG: " + bow.damage + 
            "/INJURY: " + bow.injury + 
            "/LOAD: " + bow.load + 
            "/NOTES: " + bow.notes + "</li>");
        }
        if (sword != null) {
            warGearList.append("<li>"+ sword.name + 
            "/DMG: " + sword.damage + 
            "/INJURY: " + sword.injury + 
            "/LOAD: " + sword.load + 
            "/NOTES: " + sword.notes + "</li>");
        }
        if (spear != null) {
            warGearList.append("<li>"+ spear.name + 
            "/DMG: " + spear.damage + 
            "/INJURY: " + spear.injury + 
            "/LOAD: " + spear.load + 
            "/NOTES: " + spear.notes + "</li>");
        }

     }); 
}

function getArmour() {
    $.getJSON(armourPath, (armours) => {
        let armourChosen = armours.find((armour) => armour.name === armourSelection.val());
        armourText.append(armourChosen.name + 
        "/PROTECTION: " + armourChosen.protection + 
        "/LOAD: " + armourChosen.load);
     }); 
}

function getHelm() {
    if (helmToggle[0].checked) {
        helmText.append("Helm/PROTECTION: 1d/LOAD: 4"
        );
    }
}

function getShield() {
    $.getJSON(shieldsPath, (shields) => {
        let shieldChosen = shields.find((shield) => shield.name === shieldSelection.val());
        shieldText.append(shieldChosen.name + 
        "/PARRY: " + shieldChosen.parry + 
        "/LOAD: " + shieldChosen.load);
     }); 
}

function getStartingReward() {
    $.getJSON(rewardsPath, (rewards) => {
        let rewardChosen = rewards.find((reward) => reward.name === rewardSelection.val());
        rewardsList.append("<li>"+ rewardChosen.name + 
        "(" + rewardChosen.type + "): " + 
        rewardChosen.description + "</li>");
     }); 
}

function getStartingVirtue() {
    $.getJSON(virtuesPath, (virtues) => {
        let virtueChosen = virtues.find((virtue) => virtue.name === virtueSelection.val());
        virtuesList.append("<li>"+ virtueChosen.name + ": " +
        virtueChosen.description + "</li>");
     }); 
}


function setFavoredSkill(skill) {
    switch (skill) {
        case "awe":
            aweFavoredInput[0].checked = true;
            break;
        case "athletics":
            athleticsFavoredInput[0].checked = true;;
            break;
        case "awareness":
            awarenessFavoredInput[0].checked = true;
            break;
        case "hunting":
            huntingFavoredInput[0].checked = true;
            break;
        case "song":
            songFavoredInput[0].checked = true;
            break;
        case "craft":
            craftFavoredInput[0].checked = true;
            break;
        case "enhearten":
            enheartenFavoredInput[0].checked = true;
            break;
        case "travel":
            travelFavoredInput[0].checked = true;
            break;  
        case "insight":
            insightFavoredInput[0].checked = true;
            break;
        case "healing":
            healingFavoredInput[0].checked = true;
            break;
        case "courtesy":
            courtesyFavoredInput[0].checked = true;
            break;
        case "battle":
            battleFavoredInput[0].checked = true;
            break;
        case "persuade":
            persuadeFavoredInput[0].checked = true;
            break;
        case "stealth":
            stealthFavoredInput[0].checked = true;
            break;
        case "scan":
            scanFavoredInput[0].checked = true;
            break;
        case "explore":
            exploreFavoredInput[0].checked = true;
            break;
        case "riddle":
            riddleFavoredInput[0].checked = true;
            break;
        case "lore":
            loreFavoredInput[0].checked = true;
            break;
        default:
            break;
    }
}

function setAttributes(data) {
    let chosenSetIndex = parseInt(attributeSelection.val().substring(3))-1;
    strengthRatingText.append(data.attributes.strength[chosenSetIndex]);
    strengthTnText.append(20-data.attributes.strength[chosenSetIndex]); 
    enduranceText.append(data.derivedStats.endurance + data.attributes.strength[chosenSetIndex]);
    heartRatingText.append(data.attributes.heart[chosenSetIndex]);
    heartTnText.append(20-data.attributes.heart[chosenSetIndex]); 
    hopeText.append(data.derivedStats.hope + data.attributes.heart[chosenSetIndex]);
    witsRatingText.append(data.attributes.wits[chosenSetIndex]);
    witsTnText.append(20-data.attributes.wits[chosenSetIndex]);
    parryText.append(data.derivedStats.parry + data.attributes.wits[chosenSetIndex])
}

function findChosenExperience(radioArray) {
    for (let i = 0; i < radioArray.length; i++) {
        if(radioArray[i].checked) {
            return i;
        }
    }
    return 0;
}

function findDefaultExperience(radioArray) {
    for (let i = 0; i < radioArray.length; i++) {
        if(radioArray[i].defaultChecked) {
            return i;
        }
    }
    return 0;
}


function colorDefaultExperiences() {
    for (let index = 0; index < experienceInputs.length; index++) {
        if (experienceInputs[index].defaultChecked) {
            experienceInputs[index].previousElementSibling.classList.add("default-radio");
        }
        else{
            experienceInputs[index].previousElementSibling.classList.remove("default-radio");
        }   
    }
}

var previousWeapon1;
var previousWeapon2;
var previousFeature1;
var previousFeature2;
function loadCultureBox(culture) {
    $("#culturebox").load(`public/heroic-cultures/${culture}.html`, () => {
        attributeSelection = $("#attributeSelection");
        favoredSkillSelection = $("#favoredSkillSelection");
        proficiencySelection1 = $("#proficiencySelection1");
        proficiencySelection2 = $("#proficiencySelection2");
        distinctiveFeature1 = $("#distinctiveFeature1");
        distinctiveFeature2 = $("#distinctiveFeature2");    

        proficiencySelection1.focus((event) => {
            previousWeapon1 = event.target.value;
        }).click((event) => {
            previousWeapon1 = event.target.value
        }).change((event) => {
            // Deal with changing proficiency (Change default weapon rank)
            setAllRadiosDefault();
            let chosenProficiency = event.target.value;
            let possibleProficiencies = [
                event.target.children[0].value,
                event.target.children[1].value
            ];
            $(`#proficiencySelection2 option[value=${chosenProficiency}]`).remove();
            let index = possibleProficiencies.indexOf(`${chosenProficiency}`);
            if (index > -1) { 
                possibleProficiencies.splice(index, 1); 
            }
            proficiencySelection2.append("beforeEnd", 
            `<option value="${possibleProficiencies[0]}">${possibleProficiencies[0][0].toUpperCase()+possibleProficiencies[0].slice(1)}</option>`);                  
            
            let weapon1ProficiencyInputs = getWeaponExperienceInputs(chosenProficiency);
            let previousWeaponProficiencyInputs = getWeaponExperienceInputs(previousWeapon1);
            weapon1ProficiencyInputs[findChosenExperience(weapon1ProficiencyInputs)].removeAttribute("checked");
            previousWeaponProficiencyInputs[findChosenExperience(previousWeaponProficiencyInputs)].removeAttribute("checked");
            weapon1ProficiencyInputs[2].setAttribute("checked","");
            previousWeaponProficiencyInputs[0].setAttribute("checked","");
            weapon1ProficiencyInputs[0].click();
            previousWeaponProficiencyInputs[0].click();
            previousWeapon1 = event.target.value;
            
            proficiencySelection2.click()
            let weapon2ProficiencyInputs = getWeaponExperienceInputs(previousWeapon2);
            weapon2ProficiencyInputs[findChosenExperience(weapon2ProficiencyInputs)].removeAttribute("checked");
            weapon2ProficiencyInputs[1].setAttribute("checked","");
            weapon2ProficiencyInputs[1].click();           
            colorDefaultExperiences();
        })
        
        proficiencySelection2.focus((event) => {
            previousWeapon2 = event.target.value;
        }).click((event) => {
            previousWeapon2 = event.target.value;
        }).change((event) => {
            // Deal with changing proficiency (Change default weapon rank)
            setAllRadiosDefault();
            let chosenProficiency = event.target.value;
            let weapon2ProficiencyInputs = getWeaponExperienceInputs(chosenProficiency);
            let previousWeaponProficiencyInputs = getWeaponExperienceInputs(previousWeapon2);
            previousWeaponProficiencyInputs[findChosenExperience(previousWeaponProficiencyInputs)].removeAttribute("checked");
            weapon2ProficiencyInputs[findChosenExperience(weapon2ProficiencyInputs)].removeAttribute("checked");
            weapon2ProficiencyInputs[1].setAttribute("checked","");
            previousWeaponProficiencyInputs[0].setAttribute("checked","");
            weapon2ProficiencyInputs[0].click();
            previousWeaponProficiencyInputs[0].click();
            previousWeapon2 = event.target.value;
            colorDefaultExperiences();
        })

        distinctiveFeature1.focus((event) => {
            previousFeature1 = event.target.value;
        }).click((event) => {
            previousFeature1 = event.target.value
        }).change((event) => {

            let chosenFeature = event.target.value;
            let possibleFeatures = [
                event.target.children[0].value,
                event.target.children[1].value,
                event.target.children[2].value,
                event.target.children[3].value,
                event.target.children[4].value,
                event.target.children[5].value,
                event.target.children[6].value,
                event.target.children[7].value,
            ];
            $(`#distinctiveFeature2 option[value=${chosenFeature}]`).remove();
            let index = possibleFeatures.indexOf(`${chosenFeature}`);
            if (index > -1) { 
                possibleFeatures.splice(index, 1); 
            }
            distinctiveFeature2.append("beforeEnd", 
            `<option value="${previousFeature1}">${previousFeature1}</option>`);                  
        });
    
    });
}

function loadExperienceBox(culture) {
    $("#experiencebox").load(`public/culture-experiences/${culture}-experience.html`, () => {
        skillPointsText = $("#skillPointsText");;
        aweExperienceInputs = $("input[id^=awe-choice]");
        athleticsExperienceInputs = $("input[id^=athletics-choice]");
        awarenessExperienceInputs = $("input[id^=awareness-choice]");
        huntingExperienceInputs = $("input[id^=hunting-choice]");
        songExperienceInputs = $("input[id^=song-choice]");
        craftExperienceInputs = $("input[id^=craft-choice]");
        enheartenExperienceInputs = $("input[id^=enhearten-choice]");
        travelExperienceInputs = $("input[id^=travel-choice]");
        insightExperienceInputs = $("input[id^=insight-choice]");
        healingExperienceInputs = $("input[id^=healing-choice]");
        courtesyExperienceInputs = $("input[id^=courtesy-choice]");
        battleExperienceInputs = $("input[id^=battle-choice]");
        persuadeExperienceInputs = $("input[id^=persuade-choice]");
        stealthExperienceInputs = $("input[id^=stealth-choice]");
        scanExperienceInputs = $("input[id^=scan-choice]");
        exploreExperienceInputs = $("input[id^=explore-choice]");
        riddleExperienceInputs = $("input[id^=riddle-choice]");
        loreExperienceInputs = $("input[id^=lore-choice]");
        bowsExperienceInputs = $("input[id^=bows-choice]");
        swordsExperienceInputs = $("input[id^=swords-choice]");
        axesExperienceInputs = $("input[id^=axes-choice]");
        spearsExperienceInputs = $("input[id^=spears-choice]");
        experienceInputs = $("input[type=radio]");
        lastRadios = {
            aweLastRadio: null, 
            athleticsLastRadio: null,
            awarenessLastRadio: null,
            huntingLastRadio: null,
            songLastRadio: null,
            craftLastRadio: null,
            enheartenLastRadio: null,
            travelLastRadio: null,
            insightLastRadio: null,
            healingLastRadio: null,
            courtesyLastRadio: null,
            battleLastRadio: null,
            persuadeLastRadio: null,
            stealthLastRadio: null,
            scanLastRadio: null,
            exploreLastRadio: null,              
            riddleLastRadio: null,
            loreLastRadio: null,
            bowsLastRadio: null,
            swordsLastRadio: null,
            axesLastRadio: null,
            spearsLastRadio: null,  
        }
        experienceInputs.click((event) => {
            // Get experience variables and radios
            let experienceType = event.target.name;
            let experienceValue = parseInt(event.target.value);
            let experienceRadios = $(`input[name=${experienceType}]`);
            var defaultRadio = null;
            for (let i = 0; i < experienceRadios.length; i++) {
                if(experienceRadios[i].defaultChecked === true) {
                    defaultRadio = experienceRadios[i];
                    break;
                }
            }
        
            // get default radio and previously chosen radio
            let lastRadio = getLastRadio(experienceType);
            if (lastRadio===null) {
                setLastRadio(experienceType, defaultRadio);
                lastRadio = defaultRadio;
            }    
            let defaultExperience = parseInt(defaultRadio.value);
            let lastExperience = parseInt(lastRadio.value);
        
            // Redund or upgrade based on choice
            if (experienceValue < defaultExperience) {
                // if choice is less than default, enforce default
                defaultRadio.click();
            } else if (experienceValue < lastExperience) {
                // if choice is less than previous choice, but not less than default, refund
                refundPoints(defaultExperience, lastExperience, event);
                upgradeExperience(defaultExperience, experienceValue, event);
                skillPointsText.html("Skill Points: " + skillPoints);
                
            } else if (experienceValue > lastExperience) {
                // Use points to upgrade skill rank
                upgradeExperience(lastExperience, experienceValue, event)
                skillPointsText.html("Skill Points: " + skillPoints);
            }

            // Handle adding new weapon and armor selections
            $("#gearbox").load("public/gear.html", () => {
                axesBox = $("#axesBox");
                bowsBox = $("#bowsBox");
                swordsBox = $("#swordsBox");
                spearsBox = $("#spearsBox");
                armourSelection = $("#armourSelection");
                shieldSelection = $("#shieldSelection");
                helmToggle = $("#usehelm");
                if (bowsExperienceInputs[0].checked) {
                    bowsBox[0].remove();
                }
                if (axesExperienceInputs[0].checked) {
                    axesBox[0].remove();
                }
                if (spearsExperienceInputs[0].checked) {
                    spearsBox[0].remove();
                }
                if (swordsExperienceInputs[0].checked) {
                    swordsBox[0].remove();
                }
                axesSelection = $("#axesSelection");
                bowsSelection = $("#bowsSelection");
                swordsSelection = $("#swordsSelection");
                spearsSelection = $("#spearsSelection");
                
                setCultureProsperity();
                
            });
            
        })
        colorDefaultExperiences();
        experienceInputs[0].click();
    });
}

function getWeaponExperienceInputs(experienceType) {
    switch (experienceType) {
        case "axes":
            return axesExperienceInputs;
        case "bows":
            return bowsExperienceInputs;
        case "swords":
            return swordsExperienceInputs;
        case "spears":
            return spearsExperienceInputs;
        default:
            break;
    }
}

function setAllRadiosDefault() {
    aweExperienceInputs[0].click();
    athleticsExperienceInputs[0].click();
    awarenessExperienceInputs[0].click();
    huntingExperienceInputs[0].click();
    songExperienceInputs[0].click();
    craftExperienceInputs[0].click();
    enheartenExperienceInputs[0].click();
    travelExperienceInputs[0].click();
    insightExperienceInputs[0].click();
    healingExperienceInputs[0].click();
    courtesyExperienceInputs[0].click();
    battleExperienceInputs[0].click();
    persuadeExperienceInputs[0].click();
    stealthExperienceInputs[0].click();
    scanExperienceInputs[0].click();
    exploreExperienceInputs[0].click();
    riddleExperienceInputs[0].click();
    loreExperienceInputs[0].click();
    bowsExperienceInputs[0].click();
    swordsExperienceInputs[0].click();
    axesExperienceInputs[0].click();
    spearsExperienceInputs[0].click();
    experienceInputs[0].click();  
    lastRadios = {
        aweLastRadio: null, 
        athleticsLastRadio: null,
        awarenessLastRadio: null,
        huntingLastRadio: null,
        songLastRadio: null,
        craftLastRadio: null,
        enheartenLastRadio: null,
        travelLastRadio: null,
        insightLastRadio: null,
        healingLastRadio: null,
        courtesyLastRadio: null,
        battleLastRadio: null,
        persuadeLastRadio: null,
        stealthLastRadio: null,
        scanLastRadio: null,
        exploreLastRadio: null,              
        riddleLastRadio: null,
        loreLastRadio: null,
        bowsLastRadio: null,
        swordsLastRadio: null,
        axesLastRadio: null,
        spearsLastRadio: null,  
    }
}

function setCultureProsperity() {
    switch (cultureInput.val()) {
        case "Elf of Lindon":
            $('#armourSelection option[value="Coat of Mail"]').remove();
            $('#armourSelection option[value="Mail-Shirt"]').remove();
            $('#shieldSelection option[value="Great Shield"]').remove();
            $('#shieldSelection option[value="Shield"]').remove();
            break;
        case "Hobbit of The Shire":
            $('#armourSelection option[value="Coat of Mail"]').remove();
            $('#shieldSelection option[value="Great Shield"]').remove();
            break;
        case "Man of Bree":
            $('#armourSelection option[value="Coat of Mail"]').remove();
            $('#shieldSelection option[value="Great Shield"]').remove();
            break;
        case "Rangers of The North":
            $('#armourSelection option[value="Coat of Mail"]').remove();
            $('#armourSelection option[value="Mail-Shirt"]').remove();
            $('#shieldSelection option[value="Great Shield"]').remove();
            $('#shieldSelection option[value="Shield"]').remove();
            break;
        default:
            break;
    }
}
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

// INPUTS
const nameInput = $("#charname");
const ageInput = $("#charage");
const cultureInput = $("#cultureSelection");
const callingInput = $("#callingSelection");
const aweExperienceInputs = $("input[id^=awe-choice]");
const athleticsExperienceInputs = $("input[id^=athletics-choice]");
const awarenessExperienceInputs = $("input[id^=awareness-choice]");
const huntingExperienceInputs = $("input[id^=hunting-choice]");
const songExperienceInputs = $("input[id^=song-choice]");
const craftExperienceInputs = $("input[id^=craft-choice]");
const enheartenExperienceInputs = $("input[id^=enhearten-choice]");
const travelExperienceInputs = $("input[id^=travel-choice]");
const insightExperienceInputs = $("input[id^=insight-choice]");
const healingExperienceInputs = $("input[id^=healing-choice]");
const courtesyExperienceInputs = $("input[id^=courtesy-choice]");
const battleExperienceInputs = $("input[id^=battle-choice]");
const persuadeExperienceInputs = $("input[id^=persuade-choice]");
const stealthExperienceInputs = $("input[id^=stealth-choice]");
const scanExperienceInputs = $("input[id^=scan-choice]");
const exploreExperienceInputs = $("input[id^=explore-choice]");
const riddleExperienceInputs = $("input[id^=riddle-choice]");
const loreExperienceInputs = $("input[id^=lore-choice]");
const bowsExperienceInputs = $("input[id^=bows-choice]");
const swordsExperienceInputs = $("input[id^=swords-choice]");
const axesExperienceInputs = $("input[id^=axes-choice]");
const spearsExperienceInputs = $("input[id^=spears-choice]");
const attributeInput = $("#attributeSelection");
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
const favoredSkillSelection = $("#favoredSkillSelection");

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

// Generate character when user presses button
$("#genCharButton").click(() => {
    resetCharSheet();
    nameText.append(nameInput.val());
    ageText.append(ageInput.val());

    cultureText.append(cultureInput.val());
    getCulturalInfo();
    getAttributes();

    callingText.append(callingInput.val());
    getCallingInfo();

    getExperiences();
})


// FUNCTIONS
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
    flawText.html("Cultural Flaw: ");
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
    let chosenSetIndex = parseInt(attributeInput.val().substring(3))-1;
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
            return i+1;
        }
    }
    return 0;
}

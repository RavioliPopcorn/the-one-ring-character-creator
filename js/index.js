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
const cultureInput = $("#cultureSelection")
const callingInput = $("#callingSelection")

// OUTPUTS
const nameText = $("#nameText");
const ageText = $("#ageText");
const cultureText = $("#cultureText");
const blessingText = $("#blessingText");
const flawText = $("#flawText");
const shadowPathText = $("#shadowPathText");
const callingText = $("#callingText");
const distinctiveFeatureText = $("#distinctiveFeatureText");

// Generate character when user presses button
$("#genCharButton").click(() => {
    resetCharSheet();
    nameText.append(nameInput.val());
    ageText.append(ageInput.val());
    cultureText.append(cultureInput.val());
    getCulturalInfo();
    callingText.append(callingInput.val());
    getCallingInfo();
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
            });
            break;
        case "Dwarf of Durin's Folk":
            $.getJSON(dwarfPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append(data.flaw.flawName);
            });
            break;
        case "Elf of Lindon":
            $.getJSON(elfPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append(data.flaw.flawName);
            });
            break;
        case "Hobbit of The Shire":
            $.getJSON(hobbitPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append(data.flaw.flawName);
            });
            break;
        case "Man of Bree":
            $.getJSON(breeManPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append("None");
            });
            break;
        case "Rangers of The North":
            $.getJSON(rangerPath, (data) => {
                blessingText.append(data.blessing.blessingName);
                flawText.append(data.flaw.flawName);
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
}

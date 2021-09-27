import { DND5E } from "../../systems/dnd5e/module/config.js";
import ActorSheet5e from "../../systems/dnd5e/module/actor/sheets/base.js";
import ActorSheet5eCharacter from "../../systems/dnd5e/module/actor/sheets/character.js";

export class Knifey5eSheet extends ActorSheet5eCharacter {
  get template() {
    return "modules/charsheet5e/templates/character-sheet.html";
  }
}

Actors.registerSheet("dnd5e", Knifey5eSheet, {
  types: ["character"],
  makeDefault: false,
	label: "Knifey's Alternate 5e Sheet"
});

Hooks.once("init", () => {
	const templatePaths = [
		// Actor Sheet Partials
		"modules/charsheet5e/templates/parts/actor-spellbook.html",
	];
	// Load the template parts
	return loadTemplates(templatePaths);
});

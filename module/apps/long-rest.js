export class LongRestDialog extends BaseEntitySheet {

	static get defaultOptions() {
		const options = super.defaultOptions;
		return mergeObject(options, {
			id: "long-rest",
			classes: ["dnd4eBeta", "actor-rest"],
			template: "systems/dnd4eBeta/templates/apps/long-rest.html",
			width: 500,
			closeOnSubmit: true
		});
	}
	
	get title() {
		return `${this.object.name} - Long Rest`;
	}

	/** @override */
	getData() {
		
		return {data: this.object.data.data}
	}
	
	async _updateObject(event, formData) {
		
		const updateData = {};
		
		if(formData.envi == "false")
		{
			if(this.object.data.data.details.surgeEnv.value > this.object.data.data.details.surges.max)
			{
				updateData[`data.details.surges.value`] = 0;
				updateData[`data.attributes.hp.value`] = this.object.data.data.attributes.hp.max + (this.object.data.data.details.surges.max - this.object.data.data.details.surgeEnv.value) *  Math.floor(this.object.data.data.details.bloodied / 2);
			}
			else{
				updateData[`data.details.surges.value`] = this.object.data.data.details.surges.max - this.object.data.data.details.surgeEnv.value;
				updateData[`data.attributes.hp.value`] = this.object.data.data.attributes.hp.max;
			}
		}
		else
		{
			updateData[`data.details.surges.value`] = this.object.data.data.details.surges.max;
			updateData[`data.attributes.hp.value`] = this.object.data.data.attributes.hp.max;
			
			updateData[`data.details.surgeEnv.value`] = 0;
			updateData[`data.details.surgeEnv.bonus`] = [{}];
		}

		updateData[`data.details.temp`] = "";
		updateData[`data.details.deathsavefail`] = 0;
		updateData[`data.actionpoints.value`] = 1;
		updateData[`data.magicItemUse.milestone`] = 0;
		updateData[`data.magicItemUse.dailyuse`] = this.object.data.data.magicItemUse.perDay;
		
		updateData[`data.details.secondwind`] = false;
		updateData[`data.actionpoints.encounteruse`] = false;
		updateData[`data.magicItemUse.encounteruse`] = false;
		
		// *** TODO For Each reset encounter & daily power HERE
		const items = this.object.items.filter(item => ["enc", "day"].includes(item.data.data.uses?.per));
		const updateItems = items.map( item => {
			return {
				_id: item._id,
				"data.uses.value": item.data.data.uses.max
			};
		});
		await this.object.updateEmbeddedEntity("OwnedItem", updateItems);
		ChatMessage.create({
			user: game.user._id,
			speaker: {actor: this.object, alias: this.object.data.name},
			// flavor: restFlavor,
			content: `${this.object.data.name} takes a long rest.`
		});		
		
		for (let r of Object.entries(this.object.data.data.resources)) {
			if((r[1].sr || r[1].lr) && r[1].max) {
				updateData[`data.resources.${r[0]}.value`] = r[1].max;
			}
		}

		this.object.update(updateData);
	}	  
}

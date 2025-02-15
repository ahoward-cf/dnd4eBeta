export class ShortRestDialog extends BaseEntitySheet {

	static get defaultOptions() {
		const options = super.defaultOptions;
		return mergeObject(options, {
			id: "short-rest",
			classes: ["dnd4eBeta", "actor-rest"],
			template: "systems/dnd4eBeta/templates/apps/short-rest.html",
			width: 500,
			closeOnSubmit: true
		});
	}
	
	get title() {
		return `${this.object.name} - Short Rest`;
	}

	/** @override */
	getData() {
		
		return {data: this.object.data.data}
	}
	
	async _updateObject(event, formData) {
		
		const updateData = {};
		updateData[`data.attributes.hp.value`] = this.object.data.data.attributes.hp.value;
		
		if(formData.surge > 0)
		{
			if(formData.surge > this.object.data.data.details.surges.value)
				formData.surge = this.object.data.data.details.surges.value;
			
			let r = new Roll("0");
			let healamount = 0;
			for(let i = 0; i < formData.surge; i++){
				
				if(formData.bonus != "" ){
					r = new Roll(formData.bonus);
					try{
						r.roll();

					}catch (error){
						
						console.log("Invalid roll input into healing surge bonus.");
						r.roll();
					}
				}
				
				healamount += this.object.data.data.details.surgeValue + r.total;
			}

			updateData[`data.attributes.hp.value`] = Math.min(
				(this.object.data.data.attributes.hp.value + healamount),
				this.object.data.data.attributes.hp.max
			);
		
			if(this.object.data.data.details.surges.value > 0)
				updateData[`data.details.surges.value`] = this.object.data.data.details.surges.value - formData.surge;
			
		}
		else if(formData.surge == 0 && this.object.data.data.attributes.hp.value <= 0)
		{
			updateData[`data.attributes.hp.value`] = 1;
		}
		
		if(!this.object.data.data.attributes.hp.temprest)
			updateData[`data.details.temp`] = "";
		
		updateData[`data.details.secondwind`] = false;
		updateData[`data.actionpoints.encounteruse`] = false;
		updateData[`data.magicItemUse.encounteruse`] = false;
		
		// *** TODO For Each reset encounter power HERE
		//get all encounter rechage items/powers
		const items = this.object.items.filter(item => item.data.data.uses?.per === "enc");
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
			// content: this.object.data.name + " spends a short rest, regaining " + (updateData[`data.attributes.hp.value`] - this.object.data.data.attributes.hp.value) + " HP."

			content: formData.surge >= 1 ? `${this.object.data.name} takes a short rest, spending ${formData.surge} healing surge, regaining ${(updateData[`data.attributes.hp.value`] - this.object.data.data.attributes.hp.value)} HP.`
				: `${this.object.data.name} takes a short rest.`
			
			//game.i18n.format("DND4EBETA.ShortRestResult", {name: this.name, dice: -dhd, health: dhp})
		});		
		
		for (let r of Object.entries(this.object.data.data.resources)) {
			if(r[1].sr && r[1].max) {
				updateData[`data.resources.${r[0]}.value`] = r[1].max;
			}
		}

		this.object.update(updateData);
	}	  
}



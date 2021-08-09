const variations = {
	layer_1: 3,
	layer_2: 2,
	layer_3: 2,
	layer_4: 10,
	layer_5: 5,
	layer_6: 3,
};

export interface IAssets {
	layer_1: number;
	layer_2: number;
	layer_3: number;
	layer_4: number;
	layer_5: number;
	layer_6: number;
}

const getAssetIds = async (warriorCore, warriorId): Promise<IAssets> => {
	const gene = await warriorCore?.getWarrior(warriorId);
	if (!!gene) {
		const attributes = gene?.toString()?.substring(4);
		console.log({ attributes });
		const attributeArray = attributes?.match(/.{1,12}/g);
		let assetIds: IAssets;
		attributeArray.map((attribute, idx) => {
			const layer = `layer_${6 - idx}`;
			assetIds[layer] = Number(attribute) % variations[layer];
		});
		console.log({ assetIds });
		return assetIds;
	}
};

export default getAssetIds;

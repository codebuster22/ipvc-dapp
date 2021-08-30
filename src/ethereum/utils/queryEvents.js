const queryEvents = async (contract, eventName, queryArgs = []) => {
	const zero = 0;
	const filter = contract.filters[eventName](...queryArgs);
	const data = await contract.queryFilter(filter, zero);
	console.log(data);
	return data.map((event) => event.args);
};

export default queryEvents;

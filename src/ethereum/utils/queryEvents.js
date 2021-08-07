const queryEvents = async (contract, eventName, queryArgs=[]) => {
	const filter = contract.filters[eventName](...queryArgs);
	const data = await contract.queryFilter(filter, 8000000);
	return data.map((event) => event.args);
};

export default queryEvents;

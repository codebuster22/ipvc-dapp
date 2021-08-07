const queryEvents = async (contract, eventName, queryArgs=[]) => {
	const filter = contract.filters[eventName](...queryArgs);
	const data = await contract.queryFilter(filter, NEXT_PUBLIC_RINKEBY_START_BLOCK_NUMBER);
	return data.map((event) => event.args);
};

export default queryEvents;

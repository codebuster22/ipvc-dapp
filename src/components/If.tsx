interface IfProps {
	condition: boolean;
	then: JSX.Element;
	else?: JSX.Element;
}
const If = (props: IfProps): JSX.Element => {
	const condition = props.condition || false;
	const positive = props.then || null;
	const negative = props.else || null;

	return condition ? positive : negative;
};

export default If;

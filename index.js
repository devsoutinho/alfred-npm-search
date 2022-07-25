import alfy from 'alfy';

// [INPUT]
const input = alfy.input;

// [PROCESS]
const packages = [
	{
		name: 'facebook/react',
	},
	{
		name: '@skynexui/components',
	}
];
const output = packages.map((pkg) => ({
    url: 'https://google.com',
	title: `${pkg.name} ${input}`
}));

// [OUTPUT]
alfy.output(output);
import alfy from 'alfy';

// [INPUT]
const input = alfy.input;

// [PROCESS]
const body = await alfy.fetch(`https://api.skypack.dev/v1/search?q=${input}`);

const packagerURL = "http://www.npmjs.com/packagex";
const packages = body.results.map((item) => {
	return {
		title: `${item.name}`,
		subtitle: `${item.description} ${item.hasTypes ? "(TS ready)" : ""}`,
		arg: `${packagerURL}/${item.name}`,
		text: {
			copy: `${packagerURL}/${item.name}`,
			largetype: `${packagerURL}/${item.name}`,
		},
	};
});


// [OUTPUT]
const output = packages.map((pkg) => pkg);
alfy.output(output);

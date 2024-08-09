export function setup(helper) {
	helper.allowList([
		"span.chcklst-stroked",
		"span.chcklst-box fa fa-square-o",
		"span.chcklst-box fa fa-square",
		"span.chcklst-box fa fa-minus-square-o",
		"span.chcklst-box checked fa fa-check-square",
		"span.chcklst-box checked fa fa-check-square-o",
		"select",
		"select[name]",
		"option",
		"option[value]",
		"form[action]",
		"submit",
		"button[type]",
		"form[method]",
		"input[type]",
		"input[min]",
		"input[max]",
		"input[step]",
		"input[value]",
		"input[id]",
		"input[checked]",
		"input[name]",
		"label[for]",
		"output[for]",
		"output[id]"
	]);
};

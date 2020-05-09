import sut from './task.js';
import fs from 'fs';
import path from 'path';
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
describe('task', function () {
	beforeEach(() => {
		document.documentElement.innerHTML = html.toString();
		// document.body.innerHTML = `<h1>Test</h1>`;
	});

	afterEach(() => {
		// restore the original func after test
		jest.resetModules();
	});

	it('fulfills requirements', function () {
		sut();
		expect(document.querySelector('h1').textContent).toEqual('new text');
	});
});

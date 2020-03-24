const { findUser, deleteUser } = require('./users');

// write some tests
describe('users', () => {
	test('findUser', () => {
		const user = findUser('2');
		expect(user.id === 2);
	});
	test('deleteUser', () => {
		deleteUser(2);
		expect(findUser('2')).rejects.toMatch('Error: No user with id "2"');
	});
});

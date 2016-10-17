import { Transaction } from './transaction';

export const TRANSACTIONS: Transaction[] = [
	{
		date: new Date('2015-12-16T16:16:00'),
		amount: 12.68,
		points: 13,
		reference: 4567894,
		member: 'Reggie Litman',
		card: 8081112945371538,
		source: 'Earned'
	},
	{
		date: new Date('2015-12-16T16:12:00'),
		amount: 12.68,
		points: 29,
		reference: 123456,
		member: 'John Smith',
		card: 8081306450415790,
		source: 'Earned'
	}
];

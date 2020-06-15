
export class Seller {
	constructor (
		public vendorId: number,
		public name: string,
		public phoneNumber: string,
		public streetAddress: string,
		public city: string,
		public state: string,
		public zipCode: string,
	) {}
}

export class Item {
	constructor (
		public tagId: number,
		public price: number,
		public itemCode: number,
		public category: string,
		public barcode: number,
		public sellerId: number,
		public sold: boolean,
	) {}

	// clear() {
	// 	this.name = '';
	// 	this.price = undefined;
	// 	this.category = '';
	// 	this.description = '';
	// 	this.barcode = undefined;
	// 	this.sellerId = undefined;
	// 	this.sold = false;
	// }
}
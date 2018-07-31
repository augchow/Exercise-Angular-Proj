export class Product {

    constructor(public name: string,
        public price: number,
        public onSales: boolean,
        public quantity: number,
        public image?: string,
        
    ) { }

    isOnSales():boolean{
        return this.onSales;
    }

}

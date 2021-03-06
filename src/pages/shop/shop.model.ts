export class ShopModel {
    name: string;
    name_eng: string;
    detail: string;
    address: Array<AddressModel>
    tel: string;
    email: string;
    facebook: string;
    line: string;
    promoteimage: Array<string>;
    productimage: Array<string>;
    cateimage: Array<string>;
    coverimage: string;
    isactiveshop: string;
    issendmail: string;
    importform: string;
    time: Array<TimeModel>;
    category: Array<CategoryType>;
    items: Array<CategoryProduct>;

}
export class AddressModel {
    addressdetail: string;
    address: string;
    subdistinct: string;
    distinct: string;
    province: string;
    postcode: string;
    lat: string;
    lng: string;
}
export class TimeModel {
    description: string;
    timestart: string;
    timeend: string;
    days: Array<string>;
}

export class CategoryType {
    name: string;
}
export class CategoryProduct{
    cate:Array<CateModel>;
    Products:Array<ProductModel>;
}
export class CateModel{
    name: String;
    image: String;

}
export class ProductModel{
    name: String;
    price: Number;
    image: String;
}

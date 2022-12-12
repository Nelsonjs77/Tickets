import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

    //la clase se decora como un schema de mongo
@Schema()
export class ProductM extends Document{ //extiende de la calse document
        
// id: string -> se omite, lo da mongo
        
//decoradores para la propiedad (existen mas, ver doc.)
@Prop({
    unique: true,
    index: true,
})
descripcion: string;
        
@Prop()
precio: number;
}

    //esta exportacion permite ligar el esquema al modulo en el siguiente paso
export const ProductSchema = SchemaFactory.createForClass(ProductM);
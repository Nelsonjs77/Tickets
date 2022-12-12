import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductM, ProductSchema } from './entities/product.entity.mongo';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService],
  imports:[//Agregar estas lineas
  MongooseModule.forFeature([
    {
      name: ProductM.name,
      schema: ProductSchema
    }
  ])
]
})
export class ProductosModule {}

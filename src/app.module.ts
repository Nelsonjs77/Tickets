import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [ProductosModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

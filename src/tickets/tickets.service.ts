import { Injectable, NotFoundException } from '@nestjs/common';
import { ValidationMessages } from 'src/Helpers/validation.menssages.helper';
import { ProductosService } from 'src/productos/productos.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { GetTicketDto, TicketProductsDto } from './dto/get-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TicketsService {
  arrTicket: GetTicketDto[] = [];

  constructor(
    private readonly ProductosService: ProductosService
  ){}
    
  
  /* create(createTicketDto: CreateTicketDto) {
    let createTicket: GetTicketDto = new GetTicketDto();
    createTicket.productos = [];
    let totalTicket = 0;
    createTicketDto.products.forEach(p =>{
      let productItem = this.ProductosService.findOne(p.id);
      if(!productItem){
        throw new NotFoundException(ValidationMessages.ElEMENTO_NO_EXISTE);
      }
      let productInTicket: TicketProductsDto

      createTicket.productos.push({
        ...p,
        ...productItem,
        subtotal: (productItem.precio * p.cantidad)
      });
      totalTicket += productItem.precio * p.cantidad
    }); */

   /*  createTicket.folio = uuidv4();
    createTicket.fecha = new Date().toLocaleDateString(),
    createTicket.total = totalTicket

    this.arrTicket.push(createTicket);
  } */

  findAll() {
    return this.arrTicket;
  }

  findOne(folio: string) {
    const ticketBuscado = this.arrTicket.find(item => item.folio === folio)
    if(!ticketBuscado){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);
    }
    return ticketBuscado;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}

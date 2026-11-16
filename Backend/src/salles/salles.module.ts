import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SallesController } from './salles.controller.js';
import { SallesService } from './salles.service.js';
import { Salle } from './salle.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Salle])],
  controllers: [SallesController],
  providers: [SallesService],
})
export class SallesModule {}
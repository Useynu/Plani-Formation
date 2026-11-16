import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FormateursController } from './formateurs.controller.js';
import { FormateursService } from './formateurs.service.js';
import { Formateur } from './formateur.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Formateur])],
  controllers: [FormateursController],
  providers: [FormateursService],
})
export class FormateursModule {}
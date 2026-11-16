import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GroupesController } from './groupes.controller.js';
import { GroupesService } from './groupes.service.js';
import { Groupe } from './groupe.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Groupe])],
  controllers: [GroupesController],
  providers: [GroupesService],
})
export class GroupesModule {}
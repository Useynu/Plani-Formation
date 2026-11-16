import { Test, TestingModule } from '@nestjs/testing';
import { GroupesController } from './groupes.controller.js';

describe('GroupesController', () => {
  let controller: GroupesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupesController],
    }).compile();

    controller = module.get<GroupesController>(GroupesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

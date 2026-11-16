import { Test, TestingModule } from '@nestjs/testing';
import { FormateursController } from './formateurs.controller.js';

describe('FormateursController', () => {
  let controller: FormateursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormateursController],
    }).compile();

    controller = module.get<FormateursController>(FormateursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

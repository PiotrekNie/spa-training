import { Query, Resolver } from '@nestjs/graphql';
import { Car } from './entities/car';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }
}

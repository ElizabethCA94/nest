import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //instancia del framework 
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

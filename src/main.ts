import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const clientUrl = process.env.CLIENT_URL
  
  app.enableCors({
    origin: 'https://shop-frontend-r4w6.onrender.com',
    credentials: true
  })

  await app.listen(process.env.PORT || 5000);
}
bootstrap();

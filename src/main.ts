import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const clientUrl = process.env.CLIENT_URL
  
  app.enableCors({
    origin: clientUrl,
    credentials: true
  })

  await app.listen(process.env.PORT);
}
bootstrap();

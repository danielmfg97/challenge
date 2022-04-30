import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecomposeNumberModule } from './number-to-check/number-to-check.module';

@Module({
  imports: [DecomposeNumberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ComingSoonController, RegisterEmailController } from './coming-soon.controller';
import { ComingSoonService } from './coming-soon.service';

@Module({
  controllers: [ComingSoonController, RegisterEmailController],
  providers: [ComingSoonService]
})
export class ComingSoonModule {}

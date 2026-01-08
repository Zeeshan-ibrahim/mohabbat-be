import { Module } from '@nestjs/common';
import { ComingSoonController, RegisterEmailController } from './coming-soon.controller';
import { ComingSoonService } from './coming-soon.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ComingSoonController, RegisterEmailController],
  providers: [ComingSoonService]
})
export class ComingSoonModule {}

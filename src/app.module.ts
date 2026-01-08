import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ComingSoonModule } from './coming-soon/coming-soon.module';
import { PrismaService } from './prisma/prisma.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ComingSoonModule,
    // AuthModule,
  ],
  providers: [AppService, PrismaService],
  controllers: [AppController],
  exports: [PrismaService],
})
export class AppModule {}

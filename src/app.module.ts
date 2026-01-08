import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ComingSoonModule } from './coming-soon/coming-soon.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ComingSoonModule,
    // AuthModule,
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}

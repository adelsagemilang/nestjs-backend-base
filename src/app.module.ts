import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Database
import { typeOrmConfig } from './database';
import { TypeOrmModule } from '@nestjs/typeorm';

// Modules
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

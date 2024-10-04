import {Global, Logger, Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';


@Global()
@Module({
  providers: [
    {
      provide: 'config',
      useValue: new ConfigService(),
    }
  ],
  exports: [

  ],
  controllers: [],
})
export class ConfigModule {}
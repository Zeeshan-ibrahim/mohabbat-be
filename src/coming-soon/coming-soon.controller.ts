import { Body, Controller, Post } from '@nestjs/common';
import { RegisterEmailDto } from './dto/register-email.dto';
import { ComingSoonService } from './coming-soon.service';

@Controller('coming-soon')
export class ComingSoonController {
}


@Controller('/api/register-email')
export class RegisterEmailController {
  constructor(private readonly registerEmailService: ComingSoonService) {}

  @Post()
  register(@Body() registerEmailDto: RegisterEmailDto) {
    return this.registerEmailService.registerEmail(registerEmailDto.email);
  }
}

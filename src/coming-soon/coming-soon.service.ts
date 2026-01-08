import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComingSoonService {
    constructor(private readonly prisma: PrismaService) {}

  async registerEmail(email: string) {
    // Normally, you'd save to DB or call another API
    try{

        const existing = await this.prisma.preSignedUsers.findUnique({
            where: { email },
        });
  
        if (existing) {
            return { message: 'Email already registered', success: true };
        }
        
        // Add new email
        const user = await this.prisma.preSignedUsers.create({
            data: { email },
        });
        
        return { message: 'Email registered successfully', "success":"True" };
    }
    catch(err){
        return {message: 'Email not registered', "success":"False"}
    }
  }
}

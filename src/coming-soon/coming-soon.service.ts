import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ComingSoonService {
    constructor(private prisma: PrismaService) {}

  async registerEmail(email: string) {
    try{
        // Access the preSignedUsers model - PrismaService extends PrismaClient
        const existing = await (this.prisma as any).preSignedUsers.findUnique({
            where: { email },
        });
  
        if (existing) {
            return { message: 'Email already registered', success: true };
        }
        
        const user = await (this.prisma as any).preSignedUsers.create({
            data: { email },
        });
        
        return { message: 'Email registered successfully', "success":"True" };
    }
    catch(err){
        return {message: 'Email not registered', "success":"False"}
    }
  }
}
